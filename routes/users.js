const router = require('koa-router')()
const redis = require('../service/redis.js');
const orm = require('../orm/index.js');


router.get('/','/:id',function (ctx, next) {
  cx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
