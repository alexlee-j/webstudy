window.addEventListener('load',function(){
    var arrowl = document.querySelector('.arrow-l');
    var arrowr = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    var num = 0;
    var cricle = 0;
    focus.addEventListener('mousemove',function(){
        arrowl.style.display = 'block';
        arrowr.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave',function(){
        arrowl.style.display = 'none';
        arrowr.style.display = 'none';
        timer = setInterval(function(){
            arrowr.click();
        },2000)
    })
    for(var  i = 0 ; i<ul.children.length;i++){
        var li = document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li);
        li.addEventListener('click',function(){
            for(var i = 0; i<ol.children.length;i++){
                ol.children[i].className = '';

            }
            this.className = 'current';
            var index = this.getAttribute('index');
            var focusWidth = focus.offsetWidth;

            num = index;
            cricle = index;
            animate(ul,-index * focusWidth);
            
        })
    }
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    var flag = true;
    arrowr.addEventListener('click',function(){
        if(flag){
            flag = false;
            if(num == ul.children.length -1){
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul,-num * focus.offsetWidth,function(){
            flag = true;
        });
        cricle++;
        if(cricle == 4){
            cricle = 0;
        }
       current();
        }
        
    })
    arrowl.addEventListener('click',function(){
        if(flag){
            flag = false;
            if(num == 0){
            ul.style.left = -num * focus.offsetWidth -1;
            num = ul.children.length - 1;
        }
        num--;
        animate(ul,-num * focus.offsetWidth,function(){
            flag = true;
        });
        cricle--;
        if(cricle < 0){
            cricle = ol.children.length - 1;
        }
        current();
        }
        
    })
    function current(){
        for(var i = 0 ;i<ol.children.length;i++){
            ol.children[i].className = '';
        }
        ol.children[cricle].className = 'current';
    }
    var timer = setInterval(function(){
        arrowr.click();
    },2000)
    

    

})