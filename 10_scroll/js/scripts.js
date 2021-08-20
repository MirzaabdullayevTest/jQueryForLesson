$(document).ready(function () {
    var $links = $('a')

    $links.click(function (e) {
        e.preventDefault()
        $links.removeClass('active')
        var $attr = $(this).addClass('active').attr('href')
        var $top = $($attr).offset().top - 60

        $('html, body').animate({
            scrollTop: $top
        }, 500)
    })

    $(window).scroll(function () {
        var $scrollTop = $(this).scrollTop() // 

        $links.each(function () {
            var $attr = $(this).attr('href')
            var $top = $($attr).offset().top - 120

            if ($scrollTop >= $top) {
                $links.removeClass('active')
                $(this).addClass('active')
            }
        })
    })
});