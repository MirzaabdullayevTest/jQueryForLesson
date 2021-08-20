$(document).ready(function () {
    var $ccv = $('#card-ccv')
    var $ccvHTML = $('.ccv')
    var $inp = $('.input-cart-number')

    $inp.on('input', function () {
        var $index = $(this).index()
        var $length = $(this).val().length
        $('.number span:nth-child(' + $index + ')').html($(this).val())
        if ($length >= 4) {
            $(this).next().focus()
        }
    })

    $ccv.on('focus', function () {
        $('.credit-card-box .flip').css('transform', 'rotateY(180deg)')
    })
    $ccv.on('blur', function () {
        $('.credit-card-box .flip').css('transform', 'rotateY(0deg)')
    })

    $ccv.on('input', function () {
        $ccvHTML.html($(this).val())
    })
});