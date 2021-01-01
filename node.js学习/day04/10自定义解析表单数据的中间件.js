const express = require('express')

const app = express()
const parserMe = require('./11自定义中间件')
app.use(parserMe)
app.use('/',(req,res)=>{
    res.send(req.body)

})
app.listen(80,function(){
    console.log('http://127.0.0.1');
})