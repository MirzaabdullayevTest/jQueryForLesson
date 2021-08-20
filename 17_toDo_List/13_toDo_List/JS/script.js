$(document).ready(function () {
    var $inpt = $('.form-control')
    var $btn = $('.btn')
    var $ul = $('.list-group')

    $btn.click(function () {
        var $val = $inpt.val()
        $inpt.val('')
        $ul.append('<li class="alert alert-primary d-flex justify-content-between">' + '<span>' + $val + '</span>' + '<button class="btn-close">x</button> </li>')
    })

    $('.list-group').on('click', '.btn-close', function () {
        $(this).parent().remove()
    })
});