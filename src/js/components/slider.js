import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.swiper', {
  loop: false,
  slidesPerView: 5,
  spaceBetween: 25,
  scrollbar: {
    el: '.slider-scroll',
    draggable: true,
  },
  speed: 500,
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev'
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    528: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
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
