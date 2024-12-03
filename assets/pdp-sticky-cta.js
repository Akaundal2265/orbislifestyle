document.addEventListener('DOMContentLoaded', function() {
    var classSticky = 'sticky';
    var pdpHero = document.querySelector('.product-section');
    var pdpStickyCtaBar = document.querySelector('.pdp-sticky-cta-wrapper');
    var pdpFooter = document.querySelector('.site-footer');


    var isInViewport = function (elem) {
      var rect = elem.getBoundingClientRect();
  
      return (
        rect.bottom >= 0
        && rect.right >= 0
        && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        && rect.left <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    var timer;
    window.addEventListener('scroll', function () {
      if(timer) {
        window.clearTimeout(timer);
      }
  
      timer = window.setTimeout(function() {
  
        if (isInViewport(pdpHero) || isInViewport(pdpFooter)) {
          if (pdpStickyCtaBar.classList.contains(classSticky)) {
            pdpStickyCtaBar.classList.remove(classSticky)
          }
        } else {
          if (!pdpStickyCtaBar.classList.contains(classSticky)) {
            pdpStickyCtaBar.classList.add(classSticky)
          }
        }
        
      }, 100);
    });
  });
