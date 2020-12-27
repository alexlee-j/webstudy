const fs = require('fs');

fs.readFile('./files/1.txt','utf8',function(err,dataStr){
    console.log(err);//成功的结果err的值为null，失败的结果err的值为一个对象
    console.log('-------');
    console.log(dataStr);
})