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

// delivery

$('.shop').click(function () {
    $('.delivery-loc').toggleClass('active');
    $('.shop').toggleClass('active');
})

$('.favorite').click(function () {
    $(this).toggleClass('active');
})

$(function () {
    $('#myModal').on('shown.bs.modal', function () {
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

// more products slider

        var swiper = new Swiper('.prod-slider', {
            spaceBetween: 10,
            slidesPerView: 4,
            navigation: {
                nextEl: '.more-products .swiper-button-next',
                prevEl: '.more-products .swiper-button-prev',
            },
            breakpoints: {
                991: {
                    slidesPerView: 3
                },
                500: {
                    slidesPerView: 2
                }
            }

        });

    });
})


$('.fa-star').click(function(){
    $(this).addClass('checked')
    $(this).prevAll('.fa-star').addClass('checked');
    $(this).nextAll('.fa-star').removeClass('checked');
});


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