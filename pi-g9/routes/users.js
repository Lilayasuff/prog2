var express = require('express');
var router = express.Router();
const controller = require(`../controllers/usuarioController`)

/* GET users listing. */
router.get('/profile/:id', controller.profile);
router.get('/profile_edit/:id', controller.profile_edit);
router.post('/update/:id', controller.update);

module.exports = router;
