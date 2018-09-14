$('.plus').click(function () {
})
$('.min').click(function () {
})

$('.mb-0').click(function(){
    $(this).closest('.card').toggleClass('active').siblings().removeClass('active');
})

$('.mb-0.collapsed').click(function(){
    $(this).closest('.card').removeClass('active');
    return false;
});