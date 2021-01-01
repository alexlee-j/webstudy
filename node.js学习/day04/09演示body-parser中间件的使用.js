const express = require('express')

const app = express()

const parser = require('body-parser')

app.use(parser.urlencoded({extended:false}))

app.post('/book',(req,res)=>{
    console.log(req.body);
    res.send('ok')
})
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})