module.exports = function (sequelize, dataTypes) {
    const alias = "Comments";
    const cols = {
        id: {
            autoIncrement : true, 
            primaryKey : true, 
            type : dataTypes.INTEGER
        },
        descripcion:{
            type: dataTypes.STRING
        },
        usuarios_id: {
            autoIncrement : true, 
            foreignKey : true, 
            type : dataTypes.INTEGER

        },
        productos_id:{
            autoIncrement : true, 
            foreignKey : true, 
            type : dataTypes.INTEGER
        }
    };
    const config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: true,
    };
    const Comments = sequelize.define(alias, cols, config)
    Comments.associate = function(models){
        Comments.belongsTo(models.Product, {
            as: "products",
            foreignKey: "productos_id"

        })
        Comments.belongsTo(models.User,{
            as: "users",
            foreignKey: "usuarios_id"

        })

    };
    return Comments;
}
