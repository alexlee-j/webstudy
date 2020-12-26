$(function(){
    $('.wrap li').hover(function(){
        $(this).siblings().stop().fadeTo('200',0.3);

    }, $('.wrap li').hover(function(){
        $(this).siblings().stop().fadeTo('200',1);
    }))
   
})