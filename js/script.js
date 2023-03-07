$(function(){
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="/img/Arrow-1.svg" alt="">',
        nextArrow: '<img class="arrow arrow-right" src="/img/Arrow-2.svg" alt="">',
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
});