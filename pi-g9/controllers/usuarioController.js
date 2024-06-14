const bcrypt = require("bcryptjs");
const base = require('../db/moduloDatos');
const db = require ('../database/models');
const { validationResult } = require("express-validator");
const op = db.Sequelize.Op;



const controller = {
    index: function (req,res){
       return res.render('index', { productos: base.productos , usuarios: base.usuarios});
    },
    login: {

        limpio: function (req, res) {
            return res.render ('login')         
    },
        info: function (req,res){

            const validacionMal = validationResult(req);
            console.log("errorV : ", validacionMal)
             
            if(!validacionMal.isEmpty()){
                return res.render("login",{
                    errors: validacionMal.mapped(),
                    oldData:req.body
            })
            } 
        // Buscamos el usuario que se quiere loguear.
            db.Users.findOne({
                where: [{email: req.body.usuario}]
            })
            .then( function ( user ) {
                //Seteamos la session con la info del usuario
                req.session.user = user;          
            
                if(req.body.rememberme != undefined){
                    res.cookie('userId', user.id, { maxAge: 1000 * 60 * 100})
                }
                    return res.redirect('/');            
            })
                .catch( function(e) {
                    console.log(e)
            })
        }},
    
    profile_edit : function (req,res){
        return res.render('profile_edit',{ productos: base.productos , usuarios: base.usuarios})
    },
    profile: function(req,res){
        res.render('profile', { productos: base.productos , usuarios: base.usuarios});
    },
    product_add: function (req, res) {
        return res.render (`product_add`)
    },
    register: {
        limpio: function (req, res) {
            return res.render ('register')         
        },
        info: function (req, res) {
            const validacionMal = validationResult(req);
            console.log("errorV : ", validacionMal)
             
            if(!validacionMal.isEmpty()){
                return res.render("register",{
                    errors:  validacionMal.mapped(),
                    oldData:req.body
            })
        }
        const user = {
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password), 
            fecha: req.body.fecha,
            dni: req.body.dni,
            foto: req.body.foto,

        };
        db.Users
            .create(user)
            .then(function (user) {
                return res.redirect("/login");
            })
            .catch(function (err) {
                console.log("No pudimos guardar tus datos", err);
            });

    }},
    search_results: function(req,res){
        res.render('search_results', { productos: base.productos })
    }
    
}

module.exports = controller