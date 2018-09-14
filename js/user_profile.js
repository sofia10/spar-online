$( ".disabled" ).prop({
    disabled: true
});


$('.edit-icon').click(function(){
    $('.profile-form').addClass('edited-form');
    $( '.disabled').prop({
        disabled: false
    });
})
// $('.save-btn').click(function(){
//     $('.profile-form').removeClass('edited-form');
//     $( ".disabled" ).prop({
//         disabled: true
//     });
// })
$('.upload-file').click(function(){
    $('.hidden-inp').click();
})