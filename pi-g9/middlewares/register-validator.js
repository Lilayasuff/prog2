const { body } = require("express-validator")
const db = require("../database/models")
const bcrypt = require("bcryptjs")

const validationRe = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar con tu email")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un formato de correo valido")
        .custom(function(value, {req}){
            return db.Users.findOne({
                where: {email:value}
         })
            .then(function(userToRe){
                if(userToRe){
                    throw new Error("Ya existe un usuario con ese email")
            }
        })
    }
),
    body("name")
        .notEmpty()
        .withMessage("Debes completar con tu nombre"),
    body("password")
        .notEmpty()
        .withMessage("Debes introducir una contraseña")
        .bail()
        .isLength({ min: 4 })
        .withMessage('La contraseña debe tener al menos 4 caracteres')

]

module.exports = validationRe;
