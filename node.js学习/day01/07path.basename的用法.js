const fpath = '/a/d/g/index.html';
const path = require('path');
var fullname = path.basename(fpath);
console.log(fullname);
const name = path.basename(fpath,'.html');
console.log(name);