$(function(){
    var form = layui.form;
    var layer = layui.layer;
    form.verify({
        nickname:function(value){
            if(value.length>6){
                return '昵称的长度必须在1~6个字符之间'
            }
        }
    })
    initUserInfo();

    function initUserInfo(){
        $.ajax({
            method:'get',
            url:'/my/userinfo',
            success:function(res){
                console.log(res);
                if(res.status!==0){
                    return layer.msg('获取用户信息失败');
                }
                
                form.val('formUserInfo',res.data)
            }
            
        })

    }

    $('#btnReset').on('click',function(e){
        e.preventDefault();
        initUserInfo();
    })
    $('.layui-form').on('submit',function(e){
        e.preventDefault();
        console.log('点击了');
        $.ajax({
            method:'POST',
            url:'/my/userinfo',
            data:$(this).serialize(),
            success:function(res){
                if(res.status!==0){
                    console.log(res);
                    return layer.msg('更新信息失败')
                }
                layer.msg('更新信息成功');
                
            }
        })
        window.parent.getUserInfo();
    })
})