
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






// const menuOberver = new IntersectionObserver((entries) => {
//     if(entries.isIntersecting === false){
//         menuResponsivo.style.display = 'none';
//     }
// });
// const menuResponsivo = document.querySelector('.menuResponsivo');
// menuOberver.observe(menuResponsivo);