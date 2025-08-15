//-----------funcionamento do carrosel-------//
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const indicatorsContainer = document.createElement('div');
    indicatorsContainer.classList.add('carousel-indicators');
    let currentSlide = 0;
    let autoSlide;
    const intervalTime = 5000; // tempo entre slides

    // Criar as bolinhas
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('indicator');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            resetAutoSlide();
        });
        indicatorsContainer.appendChild(dot);
    });
    document.querySelector('.carousel').appendChild(indicatorsContainer);

    const indicators = indicatorsContainer.querySelectorAll('.indicator');

    // Função para mostrar slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            if (i === index) {
                const bg = slide.getAttribute('data-bg');
                slide.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('${bg}')`;
            }
        });

        // Atualizar bolinhas com animação
        indicators.forEach((dot, i) => {
            dot.classList.remove('active', 'animating');
            if (i === index) {
                dot.classList.add('active', 'animating');
                dot.style.animation = `fillDot ${intervalTime}ms linear forwards`;
            } else {
                dot.style.animation = 'none';
            }
        });
    }

    // Botão anterior
    prevBtn.addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        resetAutoSlide();
    });

    // Botão próximo
    nextBtn.addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        resetAutoSlide();
    });

    // Troca automática
    function startAutoSlide() {
        autoSlide = setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, intervalTime);
    }
    function stopAutoSlide() {
        clearInterval(autoSlide);
    }
    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    // Pausa ao passar o mouse
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);

    // Inicializar
    showSlide(currentSlide);
    startAutoSlide();
});
//--------funcionamento do carrosel-----------//