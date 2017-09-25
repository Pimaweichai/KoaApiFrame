module.exports = (sequelize,DataTypes) => {
    return sequelize.define("tags",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                max:30
            }
        }
    },{
        indexes:[
            {
                fields:['name'],
                name:'TAGINDEX'
            }
        ],
        timestamps:true,
        initialAutoIncrement:1001
    });
}
