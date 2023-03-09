
const cards = document.querySelectorAll(".card__inner");
cards.forEach(card=> card.addEventListener("click", function (e) {
// si la carte est active: 
// alors elle prend la class is-flipped:
console.log(e)
card.classList.toggle('is-flipped');
}));

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide:'true',
    fade:'true',
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    breakpoints:{
      0:{
        slidesPerView:1,
      },
    
      770:{
        slidesPerView:2,
      },
      950:{slidesPerView:3,},
    },
    });