// products quantity

var sum = 0;
$('.plus').click(function(){
    var qty = $(this).prev().find('input').val();
    qty++;
    $(this).prev().find('input').val(qty);
    $(this).closest('.slider-btm').find('.cart-animation span').html(qty);
});
$('.min').click(function(){
    var qty = $(this).next().find('input').val();
    if(qty==1)
        return;
    qty--;
    $(this).next().find('input').val(qty);
    $(this).closest('.slider-btm').find('.cart-animation span').html(qty);
});

//more products slider



$('.favorite').click(function () {
    $(this).toggleClass('active');
})

$('.delete-order').click(function () {
    $('.deleted-block').fadeIn();

    var swiper = new Swiper('.prod-slider', {
        spaceBetween: 10,
        slidesPerView: 6,
        navigation: {
            nextEl: '.more-products .swiper-button-next',
            prevEl: '.more-products .swiper-button-prev',
        },
        breakpoints: {
            991: {
                slidesPerView: 4
            },
            767: {
                slidesPerView: 3
            },
            500: {
                slidesPerView: 2
            }
        }

    })

})