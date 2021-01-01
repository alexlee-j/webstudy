const express = require('express')
const app = express()

app.use(express.static('./clock'))

app.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})