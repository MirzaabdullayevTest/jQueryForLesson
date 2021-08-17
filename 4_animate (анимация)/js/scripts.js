$(function () {
    var $ask = $('.ask')
    var $answ = $('.ask').next()  // 

    $answ.css('opacity', 0);


    $ask.on('click', function () {
        // $(this).next().css({ 'display': 'block', 'color': 'red', 'background': 'green', 'fontSize': '50px' })
        // console.log($(this).css('display'));
        $(this).next().animate({
            'opacity': 1,
            'width': '600px',
            'fontSize': '20px'
        }, 1000).animate({
            'opacity': .7,
            'width': '400px',
        }, 2000).animate({
            'opacity': .5,
            'heigth': '200px'
        }, 500).animate({
            'opacity': 1,
            'borderRadius': '50px',
        }, 1000)
    })
});
