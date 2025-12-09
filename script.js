/* -------------------------------------------------- */
/* script.js */
/* -------------------------------------------------- */
(function () {
    // mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    menuToggle && menuToggle.addEventListener('click', () => {
        const expanded = nav.style.display === 'flex';
        nav.style.display = expanded ? 'none' : 'flex';
        menuToggle.setAttribute('aria-expanded', !expanded)
    })

    // year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // simple contact form handler (no backend) — shows a friendly message
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const msg = document.getElementById('message').value.trim();
            if (!name || !email || !msg) {
                alert('Por favor preencha os campos obrigatórios.');
                return;
            }
            // simulate success
            alert('Mensagem enviada! Obrigado, ' + name + '. Vou responder por e‑mail.');
            form.reset();
        })
    }

    // accessibility: allow project cards to be activated with Enter
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') card.click();
        })
    })
})();