module.exports = (sequelize,DataTypes) => {
    var blogs =  sequelize.define("blogs",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                max:50,
            }
        },
        content:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        aggree:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:0
        }
    },{
        timestamps:true,
        initialAutoIncrement:1001
    });
    blogs.associate = db => {
        blogs.belongsTo(db.users);
        blogs.belongsTo(db.tags);
    };
    return blogs;
}
