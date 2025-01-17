const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = '☀️ Modo Claro';
    } else {
        themeToggleButton.textContent = '🌙 Modo Escuro';
    }
});

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0); // Evita ir antes do primeiro item
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    const maxIndex = carousel.children.length - 3; // Máximo índice visível
    currentIndex = Math.min(currentIndex + 1, maxIndex);
    updateCarousel();
});

function updateCarousel() {
    const itemWidth = carousel.children[0].offsetWidth;
    carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}
