const http = require('http');
const server = http.createServer();
server.on('request',function(reg,res){
    console.log('someone visit our web server');
})

server.listen(80,function(){
    console.log('server running at http://127.0.0.1');
})