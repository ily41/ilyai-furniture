

let lineTop = document.getElementById("line-top");
let lineBottom = document.getElementById("line-bottom");
let burger = document.getElementById("burger-svg")
let burgerMenu = document.querySelector(".burger-menu")
let swiperWrapper = document.querySelector(".portfolio-slider-mask .swiper-wrapper");





let isOpen = true;

function animate() {
    if(isOpen) {
        lineTop.setAttribute("transform", "translate(16 -10) rotate(45)");
        lineBottom.setAttribute("transform", "translate(2 18) rotate(-45)");
        lineTop.style.transition = "transform 0.5s ease";
        lineBottom.style.transition = "transform 0.5s ease";
        lineTop.style.stroke = "#F4F4EA";
        lineBottom.style.stroke = "#F4F4EA";
        burgerMenu.style.display = "flex"

    }else {
        lineTop.setAttribute("transform", "");
        lineBottom.setAttribute("transform", "");
        lineTop.style.transition = "transform 0.5s ease";
        lineBottom.style.transition = "transform 0.5s ease";
        lineTop.style.stroke = "#4E2A1E";
        lineBottom.style.stroke = "#4E2A1E";
        burgerMenu.style.display = "none"
    }
    isOpen = !isOpen
    


}

document.querySelector(".burger-svg").addEventListener("click", animate);

function livingSlider() {
    let portfolioSliderMask = document.querySelector(".portfolio-slider-mask");
    let swiperWrapper = document.querySelector(".portfolio-slider-mask .swiper-wrapper");
    swiperWrapper.innerHTML = "";

    portfolioSliderMask.classList.add("active");

    data[0].sofas.forEach(element => {
        swiperWrapper.innerHTML += `
        <div style="border-radius:16px;background: url(${element}) center/cover no-repeat;" class="swiper-slide"></div>
        `;
    });
    
    setTimeout(() => {
        new Swiper('.portfolio-slider-mask .swiper', {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            loop: false,
            slideToClickedSlide: true,
        });
    }, 100);
}





