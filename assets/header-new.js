document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.lsg-header__menu-mobile');
    const searchTrigger = document.querySelector('.lsg-header .js-search-header')
    const predictiveSearchWrapper = document.querySelector('.lsg-header .site-header__search-container')
    const predictiveSearchEl = document.querySelector('.lsg-header predictive-search')
    const predictiveSearchClose = document.querySelector('.lsg-header predictive-search .btn--close-search')
  
    if (searchTrigger) {
      searchTrigger.removeAttribute('href');
    }

    searchTrigger.addEventListener('click', function() {
      predictiveSearchEl.classList.toggle('is-active');
      predictiveSearchWrapper.classList.toggle('is-active');
    });

     predictiveSearchClose.addEventListener('click', function() {
      if (predictiveSearchWrapper.classList.contains('is-active')) {
      predictiveSearchWrapper.classList.remove('is-active');
    }
    });
  
  
    hamburgerMenu.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      hamburgerMenu.classList.toggle('active');

    });
  });
  