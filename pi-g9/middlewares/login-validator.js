const { body } = require("express-validator")
const db = require("../database/models")
const bcrypt = require("bcryptjs")

const validacionLo = [
    body("usuario")
        .notEmpty()
        .withMessage("Debes completar con tu email")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un formato de correo valido")
        .custom(function(value, {req}){
            return db.Users.findOne({
                where: {email:value}
         })
            .then(function(userToLogin){
                if(!userToLogin){
                    throw new Error("No existe un usuario con ese email")
            }
        })
    }
),
    body("password")
        .notEmpty()
        .withMessage("Debes introducir tu contraseña")
        .bail()
        .custom(function(value, {req}){
            return db.Users.findOne({
                where: {email:req.body.usuario}
            })
            .then(function(user){
                if(user){
                    const password = user.password;
                    const passwordCo= bcrypt.compareSync(value,password);
                    if(!passwordCo){
                        throw new Error("Contraseña incorrecta")
                    }                    
                }
            })
        })
        

]
module.exports = validacionLo;