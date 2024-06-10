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
        },
        createdAt:{
            type: dataTypes.DATE,
            field: 'createdAt'
        },
        updateAt:{
            type: dataTypes.DATE,
            field: 'updateAt'
        },
        deletedAt:{
            type: dataTypes.DATE,
            field: 'deletedAt'
        }


    }
    const config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: true,
        createdAt: "created_at",
        updateAt: "updated_at",
        deletedAt: "deleted_at",
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