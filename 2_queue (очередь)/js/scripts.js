// jqdoc
$(document).ready(function () {
    $('.ask').on('click', function () {
        var answ = $(this).next()

        $('.ask').next().not(answ).slideUp() // d none

        answ.slideToggle() // block
    })
});
