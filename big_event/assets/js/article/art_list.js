$(function(){

    var layer = layui.layer;
    var form = layui.form;

    template.default.imports.dataFormat = function(date){
        var dt = new Date(date);
        var y = dt.getFullYear();
        var m = dt.getMonth();
        var d = dt.getDate();
        var hh = dt.getHours();
        var mm = dt.getMinutes();
        var ss = dt.getSeconds();
        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    }

    var q = {
        pagenum:1,
        pagesize:2,
        cate_id:'',
        state:''
    }
    initTable()
    initcate()
    function initTable(){
        $.ajax({
            method:'get',
            url:'/my/article/list',
            data:q,
            success:function(res){
                if(res.status!==0) return layer.msg('获取文章列表失败！')
                var htmlStr = template('tpl-table',res)
                $('tbody').html(htmlStr);
                renderPage(res.total)
            }
        })
    }

    function initcate(){
        $.ajax({
            method:'get',
            url:'/my/article/cates',
            success:function(res){
                if(res.status!==0) return layer.msg('获取分类数据失败')
                var htmlStr = template('tpl-cate',res)
                $('[name=cate_id]').html(htmlStr)
                form.render()
            }
        })
    }
    $('#form-search').on('submit',function(e){
        e.preventDefault();
        var cate_id = $('[name=cate_id]').val()
        var state = $('[name=state]').val()
        q.cate_id = cate_id;
        q.state = state;
        initTable()
    })

    function renderPage(total){
        laypage.render({
            elem: 'pageBox' //注意，这里的 test1 是 ID，不用加 # 号
            ,count: total, //数据总数，从服务端得到
            limit:q.pagesize,
            curr:q.pagenum,//默认被选中页数
            layout:['count','limit','prev','next','skip'],
            limits:[2,3,5,10],
            jump:function(obj,first){
                q.pagenum = obj.curr;
                q.pagesize = obj.limit;
                if(!first){
                    initTable()
                }

            }
        });
    }


    $('tbody').on('submit','.btn-delete',function(){
        var len = $('.btn-delete').length;
        var id = $(this).attr('data-id')
        layer.confirm('确认删除?', {icon: 3, title:'提示'}, 
        function(index){
            //do something
            $.ajax({
                method:'get',
                url:'/my/article/delete/'+id,
                success:function(res){
                    if(res.status!==0) return layer.msg('删除文章失败')
                    layer.msg('删除文章成功')

                    if(len === 1){
                        q.pagenum = q.pagenum === 1 ? 1 : q.pagenum-1;
                    }
                    initTable()
                }
            })
            layer.close(index);
          });
    })



})