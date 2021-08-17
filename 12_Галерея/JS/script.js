$(document).ready(function () {
    var bigImg = $('#big img')
    var smallBtn = $('#small a')

    smallBtn.click(function (e) {
        e.preventDefault()
        var btnAttr = $(this).attr('href')
        bigImg.fadeOut(1000, function () { // ob tashash
            bigImg.attr('src', btnAttr)
            bigImg.fadeIn() // qo'yish 
        })
    })

});