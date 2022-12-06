import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.swiper', {
  loop: false,
  slidesPerView: '5',
  spaceBetween: 38,
  scrollbar: {
    el: '.slider-scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev'
  },
});
