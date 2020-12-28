const http = require('http')
const server = http.createServer();
server.on('request',req =>{
    const url = req.url;
    const method = req.method
    const str = `your request url is ${url},and request method is ${method}`

    console.log(str);
})
server.listen(81,() =>{
    console.log('server running at http://127.0.0.1');
})