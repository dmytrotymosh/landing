const slider = document.querySelector('.swiper-container');

let swiper = new Swiper(slider, {
  slidesPerView: 1,
  loop: true,
  observer: true,
  autoplay: {
    delay: 3000,
  },
  allowTouchMove: false,
});