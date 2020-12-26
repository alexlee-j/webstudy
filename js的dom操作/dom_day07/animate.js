function animate(obj,target,goback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var step = (target - obj.offsetLeft)/10;
        step = step >0 ?Math.ceil(step) :Math.floor(step);
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
            if(goback){
                goback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    },15)
}