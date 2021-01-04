const express = require('express')

const app = express()
const joi = require('@hapi/joi')


const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({extended:false}))

app.use((req, res, next) => {
  // status 默认值为 1，表示失败的情况
  // err 的值，可能是一个错误对象，也可能是一个错误的描述字符串
  res.cc = function (err, status = 1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

const expressJWT = require('express-jwt')
const config = require('./config')
app.use(expressJWT({secret:config.jwtSecretKey}).unless({path:[/^\/api\//]}))

const userRouter = require('./router/user')
app.use('/api',userRouter) 

const userinfoRouter = require('./router/userinfo')
app.use('/my',userinfoRouter)

const artCateRouter = require('./router/artcate')
app.use('/my/article',artCateRouter)

const articleRouter = require('./router/article')
app.use('/my/article',articleRouter)

app.use('/uploads', express.static('./uploads'))

app.use(function (err, req, res, next) {
    // 数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 未知错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')

    res.cc(err)
})


app.listen(3007,function(){
    console.log('server running at http://127.0.0.3007');
})