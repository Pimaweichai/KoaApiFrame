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

fs.readdirSync(__dirname+'/models')
  .filter(file=>/\.js/.test(file))
  .forEach(file=>{
    let model  = sequelize.import(__dirname+'/models/'+file);
    console.log(model.name);
    db[model.name] = model;
  })

Object.keys(db).forEach(function(modelName){
    if('associate' in db[modelName]){
        db[modelName].associate(db);
    }
});

sequelize.sync().then(res=>{
    console.log('orm init successfully');
}).catch(e=>{
    throw e;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
