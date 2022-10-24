const navList = document.querySelector('.header__list')
let lines = document.querySelector('.lines')
let line1 = document.querySelector('.header__lines::after')
let line2 = document.querySelector('.header__lines::before')



lines.addEventListener('click', () => {
    lines.classList.toggle('active')
    navList.style.transition = '300ms'


    if (lines.classList.contains('active')) {
        navList.style.top = '130px'
    } else {
        navList.style.top = '-100%'
    }
})


var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        speed: 1000,
        transition: 1000,
    }
});