import Swiper from 'swiper';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

const heroSwiper = new Swiper('.hero__slider', {
  modules: [Pagination],
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.hero__pagination',
    bulletClass: 'hero__pagination-bullet',
    bulletElement: 'li',
    clickable: true,
    bulletActiveClass: 'hero__pagination-bullet--active'
  },
});

heroSwiper.slideReset();
