$(document).ready(function () {
    // Bootstrap Select
    var $selectpicker = $('.selectpicker');
    $selectpicker.selectpicker();


    $('.burger-btn').click(function(){
        $('.burger-bg').fadeIn();
        $('.burger-nav').addClass('active');
        $( "body" ).css( "overflow-y", "hidden" );
    });

    $('.close-btn').click(function(){
        $('.burger-bg').fadeOut();
        $('.burger-nav').removeClass('active');
        $( "body" ).css( "overflow-y", "auto" );
    });
    $('.burger-bg').click(function () {
        $('.burger-bg').fadeOut();
        $('.burger-nav').removeClass('active');
        $( "body" ).css( "overflow-y", "auto" );
    });

    //search input
    $('.search-btn').click(function() {
        $('.click-search').addClass('active');
        $('.search-btn').addClass('active');
    });
    $(document).click(function(e) {
        if ( $(e.target).closest('.active').length === 0 ) {
            $('.click-search').removeClass('active');
            $('.search-btn').removeClass('active');
        }
    });

    // end search input


    // user popup
    $('.login-btn').click(function () {
        $('.login-btn').addClass('active');
        $('.login-modal').addClass('active');
        $('.reg-btn').removeClass('active');
        $('.reg-modal').removeClass('active');
    })

    $('.reg-btn').click(function () {
        $('.login-btn').removeClass('active');
        $('.login-modal').removeClass('active');
        $('.reg-btn').addClass('active');
        $('.reg-modal').addClass('active');
    })
});




$('.product-dropdown_btn').click(function(){
    $('.main-dropdown-menu').slideToggle();
    $('.product-dropdown_btn').toggleClass('active');
});
$('.fa-angle-right').click(function(){
    $(this).closest('.dropdown-item').find('.inner-menu').addClass('active');
});
$('.back_tomenu').click(function(){
    $(this).closest('.inner-menu').removeClass('active');
});


//

$('.product-dropdown .btn-secondary').click(function(){
    $(this).toggleClass('bars');
})

$(document).click(function(e) {
    if ( $(e.target).closest('.bars').length === 0 ) {
        $('.product-dropdown .btn-secondary').removeClass('bars');
    }
});

$('.user-btn').click(function(){
    $('.user-dropdown').addClass('active');
})

$(document).click(function(e) {
    if ( $(e.target).closest('.user-btn').length === 0 ) {
        $('.user-dropdown').removeClass('active');
    }
});