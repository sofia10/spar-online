
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


//slick

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow:4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true
});



$('.fa-star').click(function(){
    $(this).addClass('checked')
    $(this).prevAll('.fa-star').addClass('checked');
    $(this).nextAll('.fa-star').removeClass('checked');
});

$('.favorite').click(function () {
    $(this).toggleClass('active');
})


//more products slider

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
        }
    }

});


$('.buy-prod').click(function(){
    $(this).addClass('animated zoomIn added');
})

$('.cart').click(function(){
    if ( $(this).hasClass('animated') ){
        qty=1;
        $(this).closest('.add-cart').find('.quantity input').val(qty);
        $(this).closest('.add-cart').find('.qty span').html(qty);
        $(this).removeClass('animated zoomIn added');
        if(qty==1)
            return;
        qty--;
    } else{
        $(this).toggleClass('animated zoomIn added');
    }
});