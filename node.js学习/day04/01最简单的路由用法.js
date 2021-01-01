const express = require('express');
const app = express()
app.get('/',function(req,res){
    res.send('hello world!')
})

app.post('/',(req,res)=>{
    res.send('this is a post request.')
})

app.listen(80,function(){
    console.log('server running at http://127.0.0.1');
})