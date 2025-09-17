const myOberver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
            entry.target.classList.add('show'); 
            return
        }
    });
});
const elements = document.querySelectorAll('.hidden');

elements.forEach(element => {
    myOberver.observe(element);
});


document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const destinoId = this.getAttribute('href').replace('#', '');
        if (destinoId) {
            const destino = document.getElementById(destinoId);
            if (destino) {
                e.preventDefault();
                destino.scrollIntoView({ behavior: 'smooth' });
               
                const menu = document.querySelector('.menuResponsivo');
                if (menu) menu.classList.remove('active');
            }
        }
    });
});


let btnEnviar = document.querySelector('.btnEnviar');
btnEnviar.addEventListener('click', function(e) {
    let inNome = document.querySelector('.inNome').value;
    let inEmail = document.querySelector('.inEmail').value;
    let inMensagem = document.querySelector('.inMensagem').value;
    let mansagem = document.querySelector('.mansagem');

    mansagem.style.color = 'red';
    mansagem.style.fontWeight = 'bold';
    if (inNome === '' || inEmail === '' || inMensagem === '') {
        e.preventDefault();
        setTimeout(() => {
            mansagem.innerText = '';
        },3000)
        mansagem.style.color = 'red';
        mansagem.innerText = 'Por favor, preencha todos os campos.';
        return;
    }
    e.preventDefault();
    mansagem.style.color = 'green';
    mansagem.innerText = 'Mensagem enviada com sucesso!';
    setTimeout(() => {
            mansagem.innerText = '';
        },3000)
    document.querySelector('.inNome').value = '';
    document.querySelector('.inEmail').value = '';
    document.querySelector('.inMensagem').value = '';
});


const btnDarkMode = document.querySelector('.btnDarkMode');
btnDarkMode.addEventListener('click', () => {
    btnDarkMode.classList.toggle('active');
});