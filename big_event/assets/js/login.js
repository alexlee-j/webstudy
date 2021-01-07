$(function(){
    $('#link-reg').on('click',function(){
        $('.reg-box').show();
        $('.login-box').hide();
    })

    $('#link-login').on('click',function(){
        $('.login-box').show();
        $('.reg-box').hide();
    })

    var form = layui.form;
    var layer = layui.layer;
    form.verify({
        pwd:[/[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'
    ],
    repwd:function(value){
        if(value !== $('.reg-box [name=repassword]').val()){
            return '两次密码不一致'
        }
    }   
    })

    $('#form_reg').on('submit', function(e) {
        // 1. 阻止默认的提交行为
        e.preventDefault()
        var data = {
            username: $('#form_reg [name=username]').val(),
            password: $('#form_reg [name=password]').val()
        }
        // 2. 发起Ajax的POST请求
        $.post('/api/reguser',data,
          function(res){
            if(res.status!==0) return layer.msg(res.message);
            lauer.msg('注册成功,请登录');
            $('#link_login').click()
        }) 
        
      })

      $('#form_login').submit(function(e){
        e.preventDefault()
        $.ajax({
            url:'/api/login',
            method:'post',
            data:$(this).serialize(),
            success:function(res){
                if(res.status!==0){
                    return layer.msg('登录失败')
                }
                layer.msg('登录成功')
                localStorage.setItem('token',res.token);
                location.href = '/big_event/index.html';
                //当简单的跳转到action时，可以用location.href进行，
                //如果href中出现中文字符，即get请求中不可以有中文字符，需要进行解码
                // encodeURI(encodeURI(keyvalue))进行编码，
                //在服务器端URLDecoder.decode(keyvalue, "UTF-8")进行解码，问题解决！
            }
        })
      })
})