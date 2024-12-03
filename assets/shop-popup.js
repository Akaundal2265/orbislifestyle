document.addEventListener('DOMContentLoaded', function() {
    var triggers = document.querySelectorAll('.b-shop__ingredient-popup');
    var popups = document.querySelectorAll('.b-shop__ingredient-popup-content');
    var popupXs = document.querySelectorAll('.pdp-popup-x');

    triggers.forEach(function(trigger, index) {
        var popupContent = popups[index];
        var popupImage = popupContent.querySelector('img');
        var popupVideo = popupContent.querySelector('video');

        var popupX = popupXs[index];

        // Open popup when trigger element is clicked
        trigger.addEventListener('click', function() {
            popupContent.classList.add('popup-flex');
            document.body.classList.add('popup-open');
            if (popupVideo) {
                popupVideo.play();
            }
        });

        // Close popup when clicking outside the image and video inside popupContent
        popupContent.addEventListener('click', function(event) {
            if (event.target !== popupImage && event.target !== popupVideo) {
                popupContent.classList.remove('popup-flex');
                document.body.classList.remove('popup-open');
                if (popupVideo) {
                    popupVideo.pause();
                }
            }
        });

        // Close popup when clicking on the close button (popupX)
        popupX.addEventListener('click', function() {
            popupContent.classList.remove('popup-flex');
            document.body.classList.remove('popup-open');
            if (popupVideo) {
                popupVideo.pause();
            }
        });
    });
});
