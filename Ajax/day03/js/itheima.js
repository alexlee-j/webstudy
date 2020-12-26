
    function resolveData(data){
        var arr = [];
        for(var k in data){
            arr.push(k + '=' + data[k]);
            
        }
        return arr.join('&')
    }
    // var str = resolveData({name: '张三',age:'18'})
    // console.log(str);
    function itheima(res){
        var xhr = new XMLHttpRequest();
        var qs = resolveData(res.data);
        if(res.method.toUpperCase() === 'GET'){
            xhr.open(res.method,res.url + '?' +qs);
            xhr.send();
        }else if(res.method.toUpperCase() === 'POST'){
            xhr.open(res.method,res.url);
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xhr.send(qs);
        }
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4&& xhr.status === 200){
                var result = JSON.parse(xhr.responseText)
                res.success(result)
            }
        }
    }
