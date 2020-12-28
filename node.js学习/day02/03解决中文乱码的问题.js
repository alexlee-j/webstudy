const http = require('http');
const server = http.createServer();
server.on('request',(req,res)=>{
    const url = req.url
    const method = req.method
    const str = `您请求的url地址为${url},您请求的方式为${method}`
    res.setHeader('Content-Type','text/html; charset=utf-8')
    console.log(str);
    res.end(str)
})

server.listen(80,function(){
    console.log('server running at http://127.0.0.1');
})