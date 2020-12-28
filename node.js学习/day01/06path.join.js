const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'../day01/files/成绩.txt'),'utf8',function(err,dataStr){
    if(err){
        return console.log("读取失败"+err.message);
    }
    console.log('读取成功'+dataStr);
})



// const pathStr = path.join(__dirname,'../day01/files/成绩.txt');
// console.log(pathStr);