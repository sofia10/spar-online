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

//filter

$('.filter-title').click(function(){
    $( event.target ).closest( ".filter" ).toggleClass( "active" );
});

$('.filter-btn').click(function(){
    $('.filters-block').addClass('active-filter');
    $('body').css('overflow','hidden');
});
$('.filter-close').click(function(){
    $('.filters-block').removeClass('active-filter');
    $('body').css('overflow','auto');
});


//price range

var prev_min_price = $("#min_value").val();
var prev_max_price = $("#max_value").val();
var min_price = $("#min_value").val();;
var max_price = $("#max_value").val();


$( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ prev_min_price, prev_max_price ],
    slide: function( event, ui ) {
        $( "#min_value" ).val( ui.values[ 0 ]);
        $( "#max_value" ).val( ui.values[ 1 ]);
        min_price = $("#min_value").val();
        max_price = $("#max_value").val();
    }
});
var maxValues = $('#slider-range').slider("option", "max");
var minValues = $('#slider-range').slider("option", "min");

$( "#min_value" ).val( $( "#slider-range" ).slider( "values", 0 ) );
$( "#max_value" ).val( $( "#slider-range" ).slider( "values", 1 ) );

$( "#min_value" ).change(function() {
    if ( $(this).val() < minValues ){
        $(this).val(minValues);
    }
    $( "#slider-range" ).slider( "values", 0, $(this).val() );
});
$( "#max_value" ).change(function() {
    if ( $(this).val() > maxValues ){
        $(this).val(maxValues);
    }
    $( "#slider-range" ).slider( "values", 1, $(this).val() );
});


// layout

$('.bars').click(function(){
    $('.grid').removeClass('active');
    $('.bars').addClass('active');
    $('.products-list').fadeOut('slow');
    $('.products-bar').fadeIn('slow');
})
$('.grid').click(function(){
    $('.bars').removeClass('active');
    $('.grid').addClass('active');
    $('.products-list').fadeIn('slow');
    $('.products-bar').fadeOut('slow');

})


//slick
//

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


$('.rating .fa-star').click(function(){
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