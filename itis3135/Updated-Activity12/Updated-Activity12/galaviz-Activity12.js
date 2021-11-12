$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true,
        captions:true,
        pause: 3000,
        pagerType: "short",
        pagerSelector:"#id_pager",
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20
    });
});