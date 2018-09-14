// JavaScript for label effects only
// $(window).load(function(){
//     $(".input-effect input").val("");
//
//     $(".input-effect input").focusout(function(){
//         if($(this).val() != ""){
//             $(this).addClass("has-content");
//         }else{
//             $(this).removeClass("has-content");
//         }
//     })
// });

$('.cont-btn.branches').click(function(){
    $('.branches-block').fadeIn();
    $('.find-block').fadeOut();
    $(this).addClass('active');
    $('.cont-btn.find').removeClass('active');
});
$('.cont-btn.find').click(function(){
    $('.branches-block').fadeOut();
    $('.find-block').fadeIn();
    $(this).addClass('active');
    $('.cont-btn.branches').removeClass('active');
});