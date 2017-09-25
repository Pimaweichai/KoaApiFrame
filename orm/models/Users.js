module.exports = (sequelize,DataTypes)=>{
    return sequelize.define("users",{
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        name: {
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                max:20
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        brief:{
            type:DataTypes.STRING,
            allowNull:true,
            validate:{
                max:50
            }
        }
    },{
        indexes:[
            {
                fields:['name'],
                name:'NAMEINDEX'
            }
        ],
        timestamps:true,
        initialAutoIncrement:1001
    })
};
