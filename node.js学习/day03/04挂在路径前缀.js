const express = require('express')
const app = express()

app.use('/clock',express.static('./clock'))//必须加上abc的前缀才能访问得到

app.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})