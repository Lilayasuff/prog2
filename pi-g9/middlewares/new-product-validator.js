const { body } = require("express-validator")
const db = require("../database/models")

const addProductValidation = [
    body("imagen")
        .notEmpty()
        .withMessage("Debes completar con una imagen")
        .bail(),
        
]
module.exports = addProductValidation;