$(function() {
    var form = layui.form;
    var layer = layui.layer;
  
    form.verify({
      pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
      samePwd: function(value) {
        if (value === $('[name=oldPwd]').val()) {
          return '新旧密码不能相同！'
        }
      },
      rePwd: function(value) {
        if (value !== $('[name=newPwd]').val()) {
          return '两次密码不一致！'
        }
      }
    })
  
    $('.layui-form').on('submit', function(e) {
      e.preventDefault()
      $.ajax({
        method: 'POST',
        url: '/my/updatepwd',
        data: $(this).serialize(),
        success: function(res) {
          if (res.status !== 0) {
            return layer.msg('更新密码失败！')
          }
          layer.msg('更新密码成功！')
          // 重置表单
          $('#resetId').click()
        // $('.layui-form')[0].reset()//当使用jquery转原生js对象中的reset方法时，
        //当 $('#queryForm')[0].reset(); 报以下错误：
        // $(...)[0].reset is not a function 

        // 不仅要检查name值是否是reset ,还有检查id值，id如果是reset同样会报这样的错误
        }
      })
    })
  })
  