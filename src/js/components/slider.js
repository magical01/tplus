import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.swiper', {
  loop: false,
  slidesPerView: 5,
  spaceBetween: 25,
  scrollbar: {
    el: '.sponsors-slider-scroll',
    draggable: true,
  },
  speed: 500,
  navigation: {
    nextEl: '.sponsors-slider-btn-next',
    prevEl: '.sponsors-slider-btn-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    528: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1198: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  }
});
