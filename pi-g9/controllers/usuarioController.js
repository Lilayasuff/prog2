const base = require('../db/moduloDatos')

const controller = {
    index: function (req,res){
       return res.render('index')
    },
    login: function (req,res){
        return res.render('login')
    },
    profile_edit : function (req,res){
        return res.render('profile_edit')
    },
    profile: function(req,res){
        res.render('profile', { productos: base.productos , usuarios: base.usuarios});
    },
    product_add: function (req, res) {
        return res.render (`product_add`)
    },
    register: function (req, res) {
        return res.render ('register')
    },
    search_results: function(req,res){
        res.render('search_results', { productos: base.productos })
    }
    
}

module.exports = controller