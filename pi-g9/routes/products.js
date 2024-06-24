let express = require('express');
let router = express.Router();
const controller = require('../controllers/usuarioController')
const controllerP = require('../controllers/productController');

router.get('/product_add', controller.product_add);
router.get('/product', controllerP.product);


module.exports = router