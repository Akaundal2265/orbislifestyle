const accordionsHolders = document.querySelectorAll('.pdp-js-accordions');

if (accordionsHolders && !!accordionsHolders.length) {
    accordionsHolders.forEach(holder => {
        const accordions = holder.querySelectorAll('.pdp-accordion');

        accordions[0].classList.add('show-text');

        accordions.forEach(accordion => {
            const accordionBtn = accordion.querySelector('.pdp-accordion__header');
            const panel = accordion.querySelector('.pdp-accordion__panel');
            accordionBtn.addEventListener('click', () => {
                accordion.classList.toggle('show-text');
                panel.style.maxHeight = panel.scrollHeight + 'px';
                !accordion.classList.contains('show-text') ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + 40 + 'px';
            });
        })
    });
}

