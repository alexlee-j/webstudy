const fs = require('fs')

const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/  //\s代表匹配任意空格字符  \S代表匹配非空字符
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname,'/素材/index.html'),'utf8',function(err,htmlStr){
    if(err) return console.log('读取失败'+err.message);
    resolve(htmlStr);
    resolveJS(htmlStr)
    resolveHTML(htmlStr)

});

function resolve(htmlStr){
    const r1 = regStyle.exec(htmlStr);
    const newcss = r1[0].replace('<style>','').replace('</style>','');
    fs.writeFile(path.join(__dirname,'clock/index.css'),newcss,function(err){
        if(err) return console.log('写入失败'+err.message);
        console.log('写入成功');
    })
}

function resolveJS(htmlStr){
    const r2 = regScript.exec(htmlStr);
    const newjs = r2[0].replace('<script>','').replace('</script>','');
    fs.writeFile(path.join(__dirname,'clock/index.js'),newjs,function(err){
        if(err) return console.log('写入失败'+err.message);
        console.log('写入成功');
    })
}

function resolveHTML(htmlStr){
    const newHTML = htmlStr.replace(regStyle,'<link rel = "stylesheet" href="index.css"/>').replace
    (regScript,'<script src = "index.js"></script>')
    fs.writeFile(path.join(__dirname,'clock/index.html'),newHTML,function(err){
        if(err) return console.log('写入失败'+err.message);
        console.log('写入成功');
    })
}