// Creazione dell'array
const listaImmagini = ["01", "02", "03", "04", "05"];

const areaImmagini = document.querySelector(".areaImmagini");

for (let i = 0; i < listaImmagini.length; i++) {

    // Condizione per assegnare la classe active alla prima immagine dell'array
    let visualizzaImmagine;
    if (i === 0) {
        visualizzaImmagine = `immagine active`;
    } else {
        visualizzaImmagine = `immagine`;
    }

    areaImmagini.innerHTML += `<img class="${visualizzaImmagine}" src="img/${listaImmagini[i]}.jpg" alt="${listaImmagini[i]}">`
}

const pulsanteIndietro = document.getElementById("indietro");
const pulsanteAvanti = document.getElementById("avanti");

pulsanteIndietro.addEventListener("click", function(){
    // Recupero dell'immagine attiva dall'html
    const immagineAttiva = document.querySelector('.immagine.active');
    // Assegnazione dell'immagine precedente
    const immaginePrecedente = immagineAttiva.previousElementSibling;

    // Condizione che rimuove la classe active dall'immagine attuale per assegnarlo all'immagine precedente
    if (immaginePrecedente){
        immagineAttiva.classList.remove('active');
        immaginePrecedente.classList.add('active');
    }
});

pulsanteAvanti.addEventListener("click", function(){
    const immagineAttiva = document.querySelector('.immagine.active');
    // Assegnazione dell'immagine successiva
    const immagineSuccessiva = immagineAttiva.nextElementSibling;

    // Condizione che rimuove la classe active dall'immagine attuale per assegnarlo all'immagine successiva
    if (immagineSuccessiva){
        immagineAttiva.classList.remove('active');
        immagineSuccessiva.classList.add('active');
    }
});