  
  const swiperRev = new Swiper('.swiper-review', {
    loop: true,
    spaceBetween: 20,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next-rev',
      prevEl: '.swiper-button-prev-rev',
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        slidesPerGroup: 3,
  
        spaceBetween: 24,
      }
    },

  });
  
