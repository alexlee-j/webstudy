const fs = require('fs');

fs.readFile('./files/成绩.txt','utf8',function(err,dataStr){
    if(err){
        console.log('文件读取失败'+ err.message);
    }
        const arrOld = dataStr.split(' ');
        const arrNew = [];
        arrOld.forEach(item =>{
            arrNew.push(item.replace('=','：'));
        })
        const newStr = arrNew.join('\r\n')
        console.log(newStr);
        fs.writeFile('./files/成绩ok.txt',newStr,function(err){
            if(err){
                console.log('成绩写入失败'+ err.message);
            }
            console.log('成绩写入成功');
        })

})