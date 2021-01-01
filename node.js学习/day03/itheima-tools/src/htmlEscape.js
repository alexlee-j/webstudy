
function htmlEscape(htmlstr){
    return htmlstr.replace(/<|>|"|&/g,(match)=>{
        switch(match){
            case '<':
                return '&lt;'
            case '>':
                return '&rt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}
function htmlUnEscape(str){
    return str.replace(/&lt;|&rt;|&quot;|&amp;/g,match =>{
        switch (match){
            case '&lt;':
                return '<'
            case '&rt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}
module.exports = {
    htmlEscape,
    htmlUnEscape
}