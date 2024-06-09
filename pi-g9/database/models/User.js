module.exports = function (sequelize, dataTypes) {
    const alias = "User";
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email:{
            type: dataTypes.STRING 

        },
        password: {
            type: dataTypes.STRING
        },
        fecha:{
            type: dataTypes.DATE

        },
        dni: {
            type: dataTypes.INTEGER
        },
        foto:{
            type: dataTypes.STRING
        }

    }
    const config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true
    };
    const Users = sequelize.define(alias,cols,config)
        Users.associate = function(models){
            Users.hasmany(models.Comment, {
                as: "comments",
                foreignKey: "usuarios_id",
          });
            Users.hasmany(models.Product,{
                as: 'products',
                foreignKey: 'usuario_id'
              })  
    };
    return Users;
}