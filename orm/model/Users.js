module.exports = (sequelize,DataTypes)=>{
    return sequelize.define("users",{
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true,
            allowNull:false
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
        }
    },{
        indexes:[
            {
                fields:['name'],
                name:'NAMEINDEX'
            }
        ],
        createAt:DataTypes.DATE,
        updateAt:DataTypes.DATE,
        initialAutoIncrement:10000
    })
};
