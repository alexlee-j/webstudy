const express = require('express')

const app = express()

app.use(express.urlencoded({extended:false}))//必须在导入路由模块前配置解析表单数据的中间件

app.get('/api/jsonp',(req,res)=>{
    const funcName = req.query.callback
    const data = {name:'zs',age:18}
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    res.send(scriptStr)
})

const cors = require('cors')
app.use(cors())
const apirouter = require('./13apiRouter')
app.use('/api',apirouter)

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})