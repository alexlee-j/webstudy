window.onload = function(){
    var tel = document.querySelector('#tel');
    var telreg = /^1[3,4,5,7,8,9]\d{9}$/;
    var qq = document.querySelector('#qq');
    var qqreg = /^[1-9]\d{4,}$/;
    var nc = document.querySelector('#nc');
    var ncreg = /^[\u4e00-\u9fa5]{2,8}$/;
    var msg = document.querySelector('#msg');
    var msgreg = /^\d{6}$/;
    var pwd = document.querySelector('#pwd');
    var pwdreg = /^\w{6,16}$/;
    var surepwd = document.querySelector('#surepwd');
    var surepwdreg = /^\w{6,16}$/;
    regxp(tel,telreg);
    regxp(qq,qqreg);
    regxp(nc,ncreg);
    regxp(msg,msgreg);
    regxp(pwd,pwdreg);
    surepwdxp(surepwd,surepwdreg);
    function regxp(ele,reg){
        ele.onkeyup = function(){
            if(reg.test(this.value)){
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '正确';
            }else{
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '错误';
            }
        }
    };
    function surepwdxp(ele,reg){
        ele.onblur = function(){
            if(this.value === pwd.value){
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '正确';
            }else{
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '两次输入不一致';
            }
        }
    }
};