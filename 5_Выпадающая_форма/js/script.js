$(function () {
    var $search = $('.search')
    var $btnSearch = $('#search')
    var $btnClose = $('#close')
    $btnSearch.click(function () {
        $search.animate({
            "top": '0'
        })
    })
    $btnClose.click(function () {
        $search.animate({
            "top": '-150px'
        })
    })
});