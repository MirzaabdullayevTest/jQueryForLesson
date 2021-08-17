$(function () {
    var $red = $('.f-red')
    var $blue = $('.f-blue')
    var $green = $('.f-green')
    var $all = $('.f-all')
    var $color = $('.color')

    function slideToggle(value) {
        $color.not(value).slideUp()
        $color.filter(value).slideDown()
    }

    $red.click(function () {
        slideToggle('.red')
    })

    $green.click(function () {
        slideToggle('.green')
    })

    $blue.click(function () {
        slideToggle('.blue')
    })
    
    $all.click(function () {
        slideToggle($color)
    })
});