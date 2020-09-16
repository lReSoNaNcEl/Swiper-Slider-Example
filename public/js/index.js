const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 900,
    preloadImages: false,
    //lazy: true, //lazy-loading
    // direction: 'vertical',
    zoom: {
        maxRatio: 5,
    },
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     draggable: true
    // },
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    keyboard: true,
    effect: 'coverflow', //fade || slide || cube || coverflow
    autoplay: true,
})