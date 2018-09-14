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