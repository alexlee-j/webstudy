$(function(){
       $('.king li').mouseenter(function(){
           $(this).stop().animate({
               width:224
           }).find('.small').stop().fadeOut().siblings('.big').stop().fadeIn();
           $(this).siblings("li").stop().animate({
                width: 69
            }).find(".small").stop().fadeIn().siblings(".big").stop().fadeOut();
            });
       
})

       

    
