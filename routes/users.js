const router = require('koa-router')()

router.get('/','/:id',function (ctx, next) {
  cx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
