const express = require('express')
const app = express()
// const mw = function(req,res,next){
//     console.log('这是最简单的中间件函数');
//     next()
// }

// app.use(mw)

app.use((req,res,next)=>{
    console.log('这是最简单的中间件函数');
    next()
})

app.get('/',(req,res)=>{
   res.send('home page');
})
app.get('/user',(req,res)=>{
    res.send('user page');
})
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})

