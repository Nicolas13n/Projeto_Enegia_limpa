
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


let enviar = () => {
    let nome = document.querySelector(".inNome").value
    let email = document.querySelector(".inEmail").value
    let mensagem = document.querySelector(".inMensagem  ").value
    validaEmail(email)
    'campoVazio(nome, email, mensagem)'
    limpar()
}

const validaEmail = (email) => {
    for (let i = 0; i < email.length; i++) {
        if (email[i] == "@") {
            return
        }
    }
    alert("o email não possui o caracter @")
}

const campoVazio = (c1, c2, c3) => {
    if (c1 == "") {
        alert("um nome esta vazio")

    }
    if (c2 == "") {
        alert("um email esta vazio")

    }
    if (c3 == "") {
        alert("a mensagem esta vazio")
    }
}

const limpar = () =>{
    document.querySelector(".inNome").value = ""
    document.querySelector(".inEmail").value = ""
    document.querySelector(".inMensagem").value = ""
}