$(function () {
    var $btn = $('.btn')
    var $overlay = $('.overlay')
    var $popup = $('.popup')
    var $closeBtn = $('.close-btn')
    var $phoneInner = $('.popup .phone')

    $btn.click(function () {
        var attr = $(this).attr('data-phone')
        $phoneInner.html(attr)
        $overlay.show()
        $popup.css('transform', 'translate(-50%, -100%)')
    })

    function hide(overlay) {
        overlay.hide()
        $popup.css('transform', 'translate(-50%, 200%)')
    }

    $overlay.click(function () {
        hide($(this))
    })

    $closeBtn.click(function () {
        hide($overlay)
    })
});