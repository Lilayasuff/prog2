let express = require('express');
let router = express.Router();
const controller = require('../controllers/usuarioController')
const controllerP = require('../controllers/productController');
const validacionLo = require('../middlewares/login-validator');
const validacionRe = require('../middlewares/register-validator')


/* GET home page. */
router.get('/', controller.index);
router.post('/logout', controller.logout)

router.get('/login', controller.login.limpio);
router.post('/login',validacionLo, controller.login.info);


router.get('/register', controller.register.limpio);
router.post('/register', validacionRe, controller.register.info);


router.get('/search_results', controllerP.search_results);




module.exports = router;
