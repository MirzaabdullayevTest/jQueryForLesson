$(document).ready(function () {
    $(".owl-carousel.slider2").owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        center: true,
        merge: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
                nav: true,
            }
        }
    });
    $(".owl-carousel.slider").owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        center: true,
        merge: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
                nav: true,
            }
        }
    });
});