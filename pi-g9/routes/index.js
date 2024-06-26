let express = require('express');
let router = express.Router();
const controller = require('../controllers/usuarioController');
const controllerP = require('../controllers/productController');
const validacionLo = require('../middlewares/login-validator');
const validacionRe = require('../middlewares/register-validator');
const addProductValidation = require('../middlewares/new-product-validator');


/* GET home page. */
router.get('/', controller.index);
router.post('/logout', controller.logout)

router.get('/login', controller.login.limpio);
router.post('/login',validacionLo, controller.login.info);




router.get('/register', controller.register.limpio);
router.post('/register', validacionRe, controller.register.info);

router.get('/search_results', controllerP.search_results)
router.get('/product_add', controllerP.product_add.index)
router.post('/product_add', addProductValidation,controllerP.product_add.guardar)
router.get('/product/:id', controllerP.product);
router.post('/delete_product/:id', controllerP.delete_product);

module.exports = router;
