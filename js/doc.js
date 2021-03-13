const btnNoche = document.querySelector('#noche');

btnNoche.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnNoche.classList.toggle('active');
});