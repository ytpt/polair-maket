new Swiper('.swiper-container', {
    parallax: true,
    speed: 2000,
    slidesPerView: 1,
    slidesPerColumn: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    simulateTouch: true,
    watchOverflow: true,
    initialSlide: 2,
});

const newsCardText = document.querySelectorAll('.news__cards__card > .text-block > p');
newsCardText.forEach(p => {
    let height = p.offsetHeight;
    if (height > 44) {
        p.style.height = '44px';
        p.style.overflow = 'hidden';
        p.textContent = p.textContent.slice(0,77) + '...';
    }
})