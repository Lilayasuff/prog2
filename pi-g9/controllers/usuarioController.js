const bcrypt = require("bcryptjs");
const base = require('../db/moduloDatos');
const db = require ('../database/models');
const { validationResult } = require("express-validator");
const { Association } = require("sequelize");
const Op = db.Sequelize.Op;



const controller = {
    index: function (req,res){
        db.Products.findAll({
            include:[
                {association: "Users"}
            ]
        })
        .then(function(productos){
            res.render("index",{Products: productos})
        })
        .catch(function(err){
            console.log(err);
        })
    },
    
    login: {

        limpio: function (req, res) {
            if(req.session.user != undefined){
                return res.redirect("/")
            } else{
                return res.render ('login')      
            } 
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
               
                req.session.user = user;          
            
                    if(req.body.recordarme != undefined){
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

    register: {
        limpio: function (req, res) {
            if(req.session.user != undefined){
                return res.redirect("/")
            } else{
                return res.render ('register')      
            }         
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
            name: req.body.name,
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
        logout: function (req, res) {
           
            req.session.destroy();
            res.clearCookie("userId");
            res.redirect("/");
        },
        };
        


module.exports = controller

