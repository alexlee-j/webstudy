const fs = require('fs');

fs.readFile(__dirname + '/files/1.txt','utf8',function(err,str){
    if(err){
        console.log('读取失败'+ err.message);
    }
    console.log('读取成功' +str);
})