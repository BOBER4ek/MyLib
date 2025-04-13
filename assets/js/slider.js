document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const caption = document.querySelector('.caption');
    let currentIndex = 0;
    let autoSlideInterval;

    // Ленивая загрузка изображений
    const lazyLoadImages = () => {
        const images = document.querySelectorAll('.slide[data-src]');
        images.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    };

    // Обновление описания
    const updateCaption = () => {
        const currentSlide = slides[currentIndex];
        caption.textContent = currentSlide.getAttribute('alt');
    };

    // Переключение слайдов
    const showSlide = (index) => {
        const offset = -index * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
        updateCaption();
    };

    // Автоматическое переключение слайдов
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 15000); // 15 секунд
    };

    // Остановка автоматического переключения
    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    // Переключение на предыдущий слайд
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        stopAutoSlide();
        startAutoSlide();
    });

    // Переключение на следующий слайд
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        stopAutoSlide();
        startAutoSlide();
    });

    // Инициализация
    lazyLoadImages();
    showSlide(currentIndex);
    startAutoSlide();
});