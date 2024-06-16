
const base = require('../db/moduloDatos');
const db = require ('../database/models')
const Op = db.Sequelize.Op;


const controllerP = {
    product: function (req,res) {
        return res.render (`product`, { productos: base.productos,usuarios: base.usuarios})
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

})
}}

module.exports = controllerP