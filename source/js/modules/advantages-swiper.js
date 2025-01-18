import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const swiperWrapper = document.querySelector('.advantages__slider-wrapper');
const slides = swiperWrapper.querySelectorAll('.advantages__item');
let advantagesSwiper = false;
let isSlidesDuplicated = false;

function duplicateSlides() {
  if (isSlidesDuplicated) {
    return;
  }

  slides.forEach((slide) => {
    const clonedSlide = slide.cloneNode(true);
    clonedSlide.classList.add('cloned');
    swiperWrapper.appendChild(clonedSlide);
  });

  isSlidesDuplicated = true;
}

function removeSlides() {
  const clonedSlides = swiperWrapper.querySelectorAll('.cloned');

  clonedSlides.forEach((slide) => {
    slide.remove();
  });

  isSlidesDuplicated = false;
}

function advantagesSwiperTogle() {
  const advantagesSwiperBox = document.querySelector('.advantages__slider');

  if (window.innerWidth >= 1440) {
    duplicateSlides();

    if (!advantagesSwiper) {
      advantagesSwiperBox.classList.add('swiper');
      advantagesSwiperBox.querySelector('ul').classList.add('swiper-wrapper');
      advantagesSwiperBox.querySelectorAll('li').forEach((slide) => {
        slide.classList.add('swiper-slide');
      });

      advantagesSwiper = new Swiper('.advantages__slider', {
        modules: [Navigation],
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        initialSlide: 2,
        slidesPerGroup: 2,
        loopAddBlankSlides: false,
        centeredSlides: true,
        navigation: {
          nextEl: '.advantages__slider-button--next',
          prevEl: '.advantages__slider-button--prev',
        },
        breakpoints: {
          1900: {
            slidesOffsetBefore: -410,
            slidesOffsetAfter: -410,
          },
        }
      });
    }

  } else {
    if (advantagesSwiper) {
      advantagesSwiper.destroy(true, true);
      advantagesSwiper = false;

      advantagesSwiperBox.classList.remove('swiper');
      advantagesSwiperBox.querySelector('ul').classList.remove('swiper-wrapper');
      advantagesSwiperBox.querySelectorAll('li').forEach((slide) => {
        slide.classList.remove('swiper-slide');
      });

      removeSlides();
    }
  }
}

advantagesSwiperTogle();

window.addEventListener('resize', advantagesSwiperTogle);
