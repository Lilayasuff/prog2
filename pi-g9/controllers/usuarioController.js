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
}

module.exports = controller