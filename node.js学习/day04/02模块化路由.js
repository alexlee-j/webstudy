const express = require('express')

const app = express()

const router = require('./03router')
app.use('/api',router)//app.use()就是用来注册全局中间件
app.listen(80,function(){
    console.log('server running at http://127.0.0.1');
})