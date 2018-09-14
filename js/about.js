
var myScreenWidth = $(document).width();

if(myScreenWidth <= 991) {
    $('.down').click(function(){
        $('.menu-items').stop().slideDown("slow");
        $('.about-menu').addClass('active');
    })
    $('.up').click(function(){
        $('.menu-items').stop().slideUp("slow");
        $('.about-menu').removeClass('active');

    })
};