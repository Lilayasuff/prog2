var express = require('express');
var router = express.Router();
const controller = require(`../controllers/usuarioController`)

/* GET users listing. */
router.get('/profile/:id', controller.profile);
router.get('/profile_edit', controller.profile_edit);

module.exports = router;
