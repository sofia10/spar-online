var swiper = new Swiper('.s1', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.s1 .swiper-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.chosen-slider', {
    slidesPerView: 6,
    spaceBetween: 10,
    breakpoints: {
        1199: {
            slidesPerView: 5
        },
        991: {
            slidesPerView: 4
        },
        767: {
            slidesPerView: 3
        },
        480: {
            slidesPerView: 2
        },
    }
});


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
    $('.delivery-loc').addClass('active');
    $('.shop').addClass('active');
    $('.place-deliv').removeClass('active');
    $('.place').removeClass('active');
})

$('.place').click(function () {
    $('.delivery-loc').removeClass('active');
    $('.shop').removeClass('active');
    $('.place-deliv').addClass('active');
    $('.place').addClass('active');
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
});

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

//scroll
$(document).scroll(function(){
    var scrollHeight = $(document).scrollTop();
    if(scrollHeight > 0)
        $('.site__header').addClass('stuck','slow');
    else
        $('.site__header').removeClass('stuck','slow');
});

//inicialization of select picker
$('.selectpicker').selectpicker();

//on change function i need to control selected value
$('select.selectpicker').on('change', function(){
    var selected = $('.selectpicker option:selected').val();
    $('.choose-deliver').hide();
    $('.chosen').addClass('active');
});

