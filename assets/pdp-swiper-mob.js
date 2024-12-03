document.querySelectorAll('.swiper-mobile').forEach(function(element) {
  var swiperMobile = new Swiper(element, {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    watchOverflow:true,
    navigation: {
      nextEl: element.querySelector('.swiper-button-next-mob'),
      prevEl: element.querySelector('.swiper-button-prev-mob'),
    },
    pagination: {
      el: element.querySelector('.swiper-pagination-mob'),
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40,
        loop: element.querySelectorAll('.swiper-slide').length > 4 ? true : false,

      }
    }
  });

});



