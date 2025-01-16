import Swiper from 'swiper';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';

const heroSwiper = new Swiper('.hero__slider', {
  modules: [Pagination],
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.hero__pagination',
    bulletClass: 'hero__pagination-bullet',
    bulletElement: 'button',
    clickable: true,
    bulletActiveClass: 'hero__pagination-bullet--active'
  },
});

const toursSwiper = new Swiper('.tours__slider', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 18,
  navigation: {
    nextEl: '.tours__slider-button--next',
    prevEl: '.tours__slider-button--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

const trainingSwiper = new Swiper('.training__slider', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,
  initialSlide: 2,
  navigation: {
    nextEl: '.training__slider-button--next',
    prevEl: '.training__slider-button--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      initialSlide: 0,
    },
    1440: {
      slidesPerView: 4,
      initialSlide: 0,
    },
  }
});

const reviewsSwiper = new Swiper('.reviews__slider', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  navigation: {
    nextEl: '.reviews__slider-button--next',
    prevEl: '.reviews__slider-button--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 120,
    },
  }
});

// const advantagesSwiper = new Swiper('.advantages__list', {
//   modules: [Navigation],
//   direction: 'horizontal',
//   slidesPerView: 'auto',
//   navigation: {
//     nextEl: '.advantages__slider-button--next',
//     prevEl: '.advantages__slider-button--prev',
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 'auto',
//       spaceBetween: 30,
//     },
//     1440: {
//       slidesPerView: 'auto',
//       spaceBetween: 120,
//     },
//   }
// });

const gallerySwiper = new Swiper('.gallery__slider', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 5,
  loop: 'true',
  navigation: {
    nextEl: '.gallery__slider-button--next',
    prevEl: '.gallery__slider-button--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 5,
    },
  }
});

heroSwiper.slideReset();
toursSwiper.slideReset();
trainingSwiper.slideReset();
reviewsSwiper.slideReset();
// advantagesSwiper.slideReset();
gallerySwiper.slideReset();
