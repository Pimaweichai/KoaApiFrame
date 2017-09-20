const router = require('koa-router')()
const fs = require('fs');
const path = require('path');

  fs.readdirSync(__dirname)
    .filter((file)=>/\.js/.test(file)&&file.indexOf('index') === -1)
    .forEach((file)=>{
        let routename = file.slice(0,-3);
        let route = require(path.resolve(__dirname,file));
        router.use('/'+routename,route.routes(),router.allowedMethods());
    })

module.exports = router
