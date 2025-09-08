
const myOberver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
            entry.target.classList.add('show'); 
            return
        }
        entry.target.classList.remove('show');
        entry.target.classList.add('hidden');
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