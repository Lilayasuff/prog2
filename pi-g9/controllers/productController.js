
const base = require('../db/moduloDatos');
const db = require('../database/models')
const {validationResult} = require('express-validator')
const Op = db.Sequelize.Op;
const { where } = require("sequelize");


const controllerP = {
    product: function (req, res) {
        const id = req.params.id;
        db.Products.findByPk(id, {
            order: [['createdAt', 'DESC']],
            include: [
                { association: "Users" },
                {
                    association: "Comments",
                    separate: true,
                    order: [['createdAt', 'DESC']],
                    include: { association: "users" }
                }
            ]
        })
        .then((product) => {
            if (!product){
                return res.redirect('/')
            }
            let lista_comentarios = product.comments;
            
            return res.render('product', { product, lista_comentarios });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
    }, 
    search_results: function(req,res){     
      
       const busca = req.query.search;
       db.Products.findAll({
           where: {
               [Op.or]: [
                   { producto: { [Op.like]: `%${busca}%` } },
                   { descripcion: { [Op.like]: `%${busca}%` } }
               ]
           },
           order: [ 
            [ "createdAt", "DESC"]
            ],
            include: {
                association: 'Users'
            }

       })
                  
       .then( function (search){
           return res.render("search_results", { Products : search, busca} )
       })
       .catch( function (err){
           console.log(err);
        });

    },

    product_add: {
        index: function (req, res) {
            if (req.session.user == undefined) {
                return res.redirect("/");
            } else {
                return res.render("product_add");
            }
        },

        guardar: function (req, res) {
            const validacionMal = validationResult(req);
            console.log("errorV : ", validacionMal)
             
            if(!validacionMal.isEmpty()){
                return res.render("product_add",{
                    errors: validacionMal.mapped(),
                    oldData:req.body
            })
            } 
            let usuarioLogueadoId = req.session.user.id;


           const producto = {
                imagen: req.body.imagen,
                producto: req.body.producto,
                descripcion: req.body.descripcion,
                usuarios_id: usuarioLogueadoId,
                created_at: new Date()
            };

            db.Products.create(producto)
                .then(function () {
                    return res.redirect("/");
                })
                .catch(function (err) {
                    console.log("Error al guardar el ", err);
                });
        }
    },

    delete_product: function (req, res) {
        let id = req.params.id;
        db.Products.findByPk(id, {
            include: {association: "Users"}
        })
            .then (function(){               
                    db.Comments.destroy({
                        where: { productos_id: id }
                    })
                    .then(() => {
                         db.Products.destroy({
                            where: { id: id }
                        });
                    })
                    .then(() => {
                        return res.redirect('/');
                    })
                    .catch( function(e) {
                        console.log(e)
                }) 
                
                
            })

    }

};

module.exports = controllerP;