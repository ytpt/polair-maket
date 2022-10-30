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

let w = window.innerWidth;
if (w <= 479 ) {
    document.querySelector('.container').style.width = '288px';

    //HEADER
    document.querySelector('.logo').style.display = 'none';
    document.querySelector('.menu').style.display = 'none';
    const header = document.querySelector('.header');

    const mobileHeader = document.createElement('div');
    mobileHeader.classList.add('mobile-header');
    const logoMenu = `
        <div class="logo-menu">
            <a href="index.html">
                <img src="img/Polair_logo.png" alt="POLAIR" width=129 height=20>
            </a>
            <div class="logo-menu__btns">
                <button class="search"><img src="img/search.svg" alt="Поиск" width="18" height="18"></button>
                <button id="burger-menu" class="search"><img src="img/burger-menu.svg" alt="Меню" width="18" height="18"></button>
            </div>  
        </div>`;
    mobileHeader.innerHTML += logoMenu;

    const mobileMenu = document.querySelectorAll('.menu a p');
    let mobileMenuBlock = document.createElement('nav');
    mobileMenuBlock.classList.add('mobile-menu');
    mobileMenu.forEach(link => {
        const a = document.createElement('a');
        a.append(link);
        mobileMenuBlock.append(a);
    })
    mobileHeader.append(mobileMenuBlock);
    header.append(mobileHeader);

    //PRODUCTS
    const br = document.querySelectorAll('.products__list br');
    br.forEach(br => {
        br.parentNode.removeChild(br);
    })

    //DESCRIPTION
    const descBlock = document.querySelector('.description__block');
    const descBlockImg = '<img src="./img/berries.png" alt="Ягоды" width="100%" height="auto">';
    descBlock.innerHTML += descBlockImg;

    //BRANDS
    let brandsBlock = document.querySelector('.brands');
    brandsBlock.classList.add('brands-slider');
    const brandSlides = document.createElement('div');
    const brandsList = brandsBlock.querySelectorAll('li');

    let swiperHTML = '';
    brandsList.forEach(li => {
        swiperHTML += `
            <div class="swiper-slide">
                <div class="slider-content brand-content">
                    ${li.innerHTML}
                </div>
            </div>
        `;
    })

    const brandSwipper = `
            <div class="swiper brand-swipper">
                <div class="swiper-wrapper brand-wrapper">
                    ${swiperHTML}
                </div>
                <div class="swiper-pagination"></div>
            </div>`;

    brandsBlock.innerHTML = brandSwipper;

    console.log(brandsBlock.innerHTML);

    //PRODUCTS
    const firstLink = document.querySelector('.products-list__lists nav a');
    const productsHeader = `
        <a class="arrow-link">
            <h4>Продукция</h4>
            <img src="img/mobile-arrow.svg" alt="Иконка вниз" width="12" height="6">
        </a>`;
    firstLink.insertAdjacentHTML('beforebegin', productsHeader);

    new Swiper('.brand-swipper', {
        loop: true,
        parallax: true,
        speed: 2000,
        slidesPerView: 1,
        slidesPerColimn: 1,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        initialSlide: 2,
    });
}
