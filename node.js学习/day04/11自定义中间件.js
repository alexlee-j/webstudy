const qs = require('querystring')
const parserMe = (req,res,next)=>{
    let str = ''
    req.on('data',(chunk)=>{
        str += chunk
    })
    req.on('end',()=>{
        console.log(str);
        const body = qs.parse(str)
        req.body = body
        console.log(req.body);
        next()
    })
}
module.exports = parserMe