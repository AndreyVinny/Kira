const swiper = new Swiper('.swiper-banner', {
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

  const swiper_reviews = new Swiper('.swiper-reviews', {
    pagination: {
      el: '.swiper-pagination-reviews',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  })