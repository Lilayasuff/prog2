module.exports = function (sequelize, dataTypes) {
    const alias = "Products";
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        imagen:{
            type: dataTypes.STRING,

        },
        producto: {
            type: dataTypes.STRING,
        },
        descripcion:{
            type: dataTypes.STRING,

        },
        usuarios_id: {
            type: dataTypes.INTEGER,
        },
        
       
    };
    const config = {
        tableName: "productos",
        timestamps: true,
        underscored: true,
        
    };
    const Products = sequelize.define(alias,cols,config)
        Products.associate = function(models){
            Products.belongsTo(models.Users, {
                as:"Users",
                foreignKey: "usuarios_id",
            });
            Products.hasMany(models.Comments,{
                as: "Comments",
                foreignKey: "usuarios_id"
              })  

    };
    return Products;
}