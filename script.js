let container = document.getElementById("container");
let compte = setInterval(comptearebours, 1000);
let nombre = prompt("Ecrivez 60");

function comptearebours() {
    container.innerHTML = nombre;
    nombre--;
    if (nombre < 0) {
        clearInterval(compte);
    }
}
