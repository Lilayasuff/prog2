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
        const perfil = req.params.profile;
        const principal = [ ]
        for (let i = 0; i < 8; i++) {
            if (base.productos[i]) {
                 principal.push (base.productos[i])
            
        }}
        res.render('profile', { productos: principal });
    },
    product_add: function (req, res) {
        return res.render (`product_add`)
    } 
    
}

module.exports = controller