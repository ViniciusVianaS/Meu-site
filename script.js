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
