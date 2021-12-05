const swiper = new Swiper('.swiper-banner', {
    navigation: {
      nextEl: '.swiper-button-next-banner',
      prevEl: '.swiper-button-prev-banner',
    },
    pagination: {
      el: '.swiper-pagination-banner',
      clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },  
    autoplay: {
    delay: 10000,
    },
});

const swiper_gallery = new Swiper('.swiper-gallery', {
    navigation: {
      nextEl: '.swiper-button-next-gallery',
      prevEl: '.swiper-button-prev-gallery',
    },
    pagination: {
      el: '.swiper-pagination-gallery',
      clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  })