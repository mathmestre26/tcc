          //-----------funcionamento do carrosel-------//
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            if (i === index) {
                const bg = slide.getAttribute('data-bg');
                slide.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('${bg}')`;
            } else {
                slide.style.backgroundImage = '';
            }
        });
    }

    prevBtn.addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});
         //--------funcionamento do carrosel-----------//  