let express = require('express');
let router = express.Router();
const controller = require('../controllers/usuarioController')

/* GET home page. */
router.get('/', controller.index)
router.get('/login', controller.login)
router.get('/profile_edit', controller.profile_edit)
router.get('/profile', controller.profile)
router.get('/product_add', controller.product_add)
router.get('/register.html', controller.register)


module.exports = router;
