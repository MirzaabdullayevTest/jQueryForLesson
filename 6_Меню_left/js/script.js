$(function () {
    var $toggleMenu = $('.show_hide-menu')
    var $menu = $('.menu')
    var $icon = $('.show_hide-menu i')

    $toggleMenu.click(function () {
        // console.log($menu.css('left'));

        if ($menu.css('left') === '-300px') {
            $icon.css({ "transition": '.5s', 'transform': 'rotate(180deg)' })

            $menu.animate({
                'left': 0
            })
        } else {

            $icon.css({ "transition": '.5s', 'transform': 'rotate(0deg)' })

            $menu.animate({
                'left': '-300px'
            })
        }
    })
});