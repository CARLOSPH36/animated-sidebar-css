/* querySelector() es un metodo que te permite seleccionar un elemento */
const btnToggle = document.querySelector(' .toggle-btn');
btnToggle.addEventListener('click', function () {
    /* classList.toggle() agrega una clase si no la tiene o la quita si la tiene */
    document.getElementById('sidebar').classList.toggle('active');
});