$(function(){
    var flag = true;
    toggleToor();
    function toggleToor(){
        if($(document).scrollTop() >= $('.recommend').offset().top){
            $('.fixedtool').fadeIn();
        }else{
            $('.fixedtool').fadeOut();
        }
    }
    $(window).scroll(function(){
        toggleToor();
        if (flag) {
        $(".floor .w").each(function(i, ele) {
            if ($(document).scrollTop() >= $(ele).offset().top) {
                console.log(i);
                $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

            }
        })
    }
    });
    $('.fixedtool li').click(function(){
        flag = false;
        $('body,html').stop().animate({
            scrollTop:$('.floor .w').eq($(this).index()).offset().top
        },function(){
            flag = true;
        });
        $(this).addClass('current').siblings().removeClass();
    });
    
})