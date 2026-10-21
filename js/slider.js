
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const prev = document.getElementById('prevBtn');
    const next = document.getElementById('nextBtn');
    const indicatorsContainer = document.getElementById('indicators');
    
    if (!slider || slides.length === 0) return; // Proteção contra erros de console

    let currentIndex = 0;
    let autoSlideInterval;

    // Create indicators dynamically
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetInterval();
        });
        
        if (indicatorsContainer) {
            indicatorsContainer.appendChild(dot);
        }
    });

    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        if(dots[currentIndex]) dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateSlider();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    function resetInterval() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    if (next) next.addEventListener('click', () => { nextSlide(); resetInterval(); });
    if (prev) prev.addEventListener('click', () => { prevSlide(); resetInterval(); });
    
    // Iniciar auto transition
    autoSlideInterval = setInterval(nextSlide, 5000);
});
