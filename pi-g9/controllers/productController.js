const base = require('../db/moduloDatos')


const controllerP = {
product: function (req,res) {
    return res.render (`product`, { productos: base.productos} )
},
}

module.exports = controllerP