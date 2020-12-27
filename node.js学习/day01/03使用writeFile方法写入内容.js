const { UV_FS_O_FILEMAP } = require('constants');
const fs = require('fs');

fs.writeFile('./files/2.txt','abcd',function(err){
    if(err){
        return console.log('文件写入失败'+err.message);
    }else{
        return console.log('写入成功');
    }
})