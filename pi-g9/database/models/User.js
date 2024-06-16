module.exports = function (sequelize, dataTypes) {
    const alias = "Users";
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email:{
            type: dataTypes.STRING 

        },
        name:{
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
        },
       


    }
    const config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: true,
        
    };
    const Users = sequelize.define(alias,cols,config)
        Users.associate = function(models){
            Users.hasMany(models.Comments, {
                as: "comments",
                foreignKey: "usuarios_id",
          });
            Users.hasMany(models.Products,{
                as: 'products',
                foreignKey: 'usuarios_id'
              })  
    };
    return Users;
}