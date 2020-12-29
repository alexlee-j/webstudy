const TIME = require('./itheima-tools')

const dt = new Date()
const newDT = TIME.dateFormat(dt)
console.log(newDT); 

const str = '<h1>这是一个h1&nbsp标签</h1>'
const newStr = TIME.htmlEscape(str)
console.log(newStr);