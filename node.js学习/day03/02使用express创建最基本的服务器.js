const express = require('express')

const app = express()
app.get('/user/:id/:username',function(req,res){
    /* console.log(req.query);//req.query获取到url里传过来的参数
    res.send(req.query); */
    console.log(req.params);//动态匹配到url参数，默认是一个空对象
    res.send(req.params)
})
app.post('/user',function(req,res){
    res.send('请求成功')
})
app.listen(80,()=>{
    console.log('server runing at http://127.0.0.1');
})
