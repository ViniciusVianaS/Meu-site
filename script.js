document.getElementById('ano').textContent = new Date().getFullYear();

function enviarContato(ev) {
    ev.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const assunto = encodeURIComponent('Novo contato pelo portfolio');
    const corpo = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\nMensagem:\n${mensagem}`);
    window.location.href = `mailto:vinicius@email.com?subject=${assunto}&body=${corpo}`;
}
