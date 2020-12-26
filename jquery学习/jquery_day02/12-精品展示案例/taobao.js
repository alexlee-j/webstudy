$(function(){
    $('#left li').mouseover(function(){
        var index = $(this).index();
        $('#content div').eq(index).show();
        $('#content div').eq(index).siblings().hide();
    })
})