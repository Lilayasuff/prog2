const { body } = require("express-validator")
const db = require("../database/models")

const addProductValidation = [
    body("imagen")
        .notEmpty()
        .withMessage("Debes completar con una imagen")
        .bail(),
    
    body("producto")
        .notEmpty()
        .withMessage("El producto necesita un nombre")
        .isLength({ max: 30 })
        .bail(),

    body("descripcion")
        .notEmpty()
        .withMessage("El producto necesita una descripcion")
        .bail(),     
]
module.exports = addProductValidation;