$('.pay-place').click(function(){
    $(this).addClass('active');
    $('.pay-card').removeClass('active');
    $('.pay-money').fadeIn();
});
$('.pay-card').click(function(){
    $(this).addClass('active');
    $('.pay-place').removeClass('active');
    $('.pay-money').fadeOut();

})



///


$( ".disabled" ).prop({
    disabled: true
});


$('.edit').click(function(){
    $(this).closest('.adress-item').addClass('edited-input');
    $( '.disabled').prop({
        disabled: false
    });
})
$('.save').click(function(){
    $(this).closest('.adress-item').removeClass('edited-input');
    $( ".disabled" ).prop({
        disabled: true
    });
})

$('.fa-plus-circle').click(function(){
    $('.add-adress').fadeIn('slow');
})


// change delivery

$('.delivery-btns .place').click(function(){
    $('.shop-block').hide();
    $('.place-block').show();
})

$('.delivery-btns .shop').click(function(){
    $('.shop-block').show();
    $('.place-block').hide();
})



$( function() {
    $( "#datepicker" ).datepicker();
} );

$( function() {
    $( "#datepicker1" ).datepicker();
} );


$('.place').click(function(){
    $(this).addClass('active');
    $('.shop').removeClass('active');
});
$('.shop').click(function(){
    $(this).addClass('active');
    $('.place').removeClass('active');
})


$( ".disabled" ).prop({
    disabled: true
});



if ( $(".pickup-block").hasClass("check") ) {
    $('.check .next').prop("disabled", false);
    $('.check .next').removeClass('disabled');
}


////




