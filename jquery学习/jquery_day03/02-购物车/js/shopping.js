$(function(){
    $('.checkall').change(function(){
        $('.j-checkbox, .checkall').prop("checked",$(this).prop("checked"));
        if($(this).prop("checked")){
            $(".cart-item").addClass("check-cart-item");
        }else{
            $(".cart-item").removeClass("check-cart-item");
        }
    });
    $('.j-checkbox').change(function(){
        if($('.j-checkbox:checked').length ===$('.j-checkbox').length){
            $('.checkall').prop('checked',true);
        }else{
            $('.checkall').prop('checked',false);
        }
        if($(this).prop("checked")){
            $(this).parents(".cart-item").addClass("check-cart-item");
        }else{
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });
    $('.increment').click(function(){
        var n = $(this).siblings('.itxt').val();
        n++;
        $(this).siblings('.itxt').val(n);
        var price = ($(this).parents('.p-num').siblings('.p-price').text().substr(1)*n).toFixed(2);
        
        $(this).parents('.p-num').siblings('.p-sum').text('￥'+price);
        getsum();


    });
    $('.decrement').click(function(){
        var n = $(this).siblings('.itxt').val();
        if(n <= 1){
            return false;
        }else{
            n--;
        $(this).siblings('.itxt').val(n);
        var price = ($(this).parents('.p-num').siblings('.p-price').text().substr(1)*n).toFixed(2);
        
        $(this).parents('.p-num').siblings('.p-sum').text('￥'+price);
        }
        
        
        getsum();
        
    });
    $('.itxt').change(function(){
        var n = $(this).val();
        var price = ($(this).parents('.p-num').siblings('.p-price').text().substr(1)*n).toFixed(2);
        $(this).parents('.p-num').siblings('.p-sum').text('￥'+price);
        getsum();
    });
    function getsum(){
        var count = 0;
        var money = 0;
        $('.itxt').each(function(i,ele){
            
            count += parseInt($(this).val());
            
            

        });
        $(".amount-sum em").text(count);
        $(".p-sum").each(function(i, ele) {
            money += parseFloat($(this).text().substr(1));

        });
        $('.price-sum em').text("￥" + money.toFixed(2));
    }
    $('.p-action a').click(function(){
        $(this).parents('.cart-item').remove();
        getsum();
    });
    $(".remove-batch").click(function(){
        $('.j-checkbox').parents('.cart-item').remove();
        getsum();
    });
    $('.clear-all').click(function(){
        $(".cart-item").remove();
        getsum();
    })



    //console.log($(this).parents('.p-num').siblings('.p-checkbox').find('.j-checkbox').prop('checked'));
    //还有重大bug,未选中的商品也会记录为已选商品
})