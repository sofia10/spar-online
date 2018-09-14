// user popup
$('.login-check').click(function () {
    $('.login-check').addClass('active');
    $('.checkout-form').addClass('active');
    $('.reg-check').removeClass('active');
    $('.reg-form').removeClass('active');
})

$('.reg-check').click(function () {
    $('.login-check').removeClass('active');
    $('.checkout-form').removeClass('active');
    $('.reg-check').addClass('active');
    $('.reg-form').addClass('active');
})

//show password

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}