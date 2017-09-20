var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var config = require('../config/index.js');

const sequelize = new Sequelize(config.mysql);
const db = {};
let modelname= null;
sequelize
    .authenticate()
    .then(()=>{
        console.log('Database connect successfully');
    })
    .catch(err =>{
        throw err;
    });

  fs.readdirSync(__dirname+'/model')
    .filter(file=>/\.js/.test(file))
    .forEach(file=>{
        modelname = file.slice(0,-3);
        db[modelname] = sequelize.import(__dirname+'/model/'+file);
    });

sequelize.sync().then(res=>{
    console.log('orm init successfully');
}).catch(e=>{
    throw e;
});

module.exports = db;
