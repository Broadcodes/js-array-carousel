// Creazione dell'array
const listaImmagini = ["01", "02", "03", "04", "05"];

const areaImmagini = document.querySelector(".areaImmagini");
const anteprimaImmagini = document.getElementById("anteprima");

for (let i = 0; i < listaImmagini.length; i++) {

    // Condizione per assegnare la classe active alla prima immagine dell'array
    let visualizzaImmagine;
    if (i === 0) {
        visualizzaImmagine = `immagine active`;
    } else {
        visualizzaImmagine = `immagine`;
    }

    areaImmagini.innerHTML += `<img id="image${listaImmagini[i]}" class="${visualizzaImmagine}" src="img/${listaImmagini[i]}.jpg" alt="Image ${listaImmagini[i]}">`
    anteprimaImmagini.innerHTML += `<img id="anteprimaImage${listaImmagini[i]}" class="anteprima ${visualizzaImmagine}" src="img/${listaImmagini[i]}.jpg" alt="Image ${listaImmagini[i]}">`
}

const pulsanteIndietro = document.getElementById("indietro");
const pulsanteAvanti = document.getElementById("avanti");

pulsanteIndietro.addEventListener("click", function () {
    // Recupero dell'immagine attiva dall'html
    const immagineAttiva = document.querySelector('.immagine.active');
    const immagineAnteprimaAttiva = document.querySelector('.anteprima.immagine.active');

    // Assegnazione dell'immagine precedente
    let immaginePrecedente = immagineAttiva.previousElementSibling;
    let immagineAnteprimaPrecedente = immagineAnteprimaAttiva.previousElementSibling;

    // Condizione che rimuove la classe active dall'immagine attuale per assegnarlo all'immagine precedente
    if (immaginePrecedente != null) {
        immagineAttiva.classList.remove('active');
        immaginePrecedente.classList.add('active');
    } else {
        immagineAttiva.classList.remove('active');
        const ultimaImmagineArray = document.getElementById("image05");
        ultimaImmagineArray.classList.add('active');
    }

    // ----------------------------------------------------------------------------------

    if (immagineAnteprimaPrecedente != null) {
        immagineAnteprimaAttiva.classList.remove('active');
        immagineAnteprimaPrecedente.classList.add('active');
    } else {
        immagineAnteprimaAttiva.classList.remove('active');
        const primaImmagineArray = document.getElementById("anteprimaImage05");
        primaImmagineArray.classList.add('active');
    }
});

pulsanteAvanti.addEventListener("click", function () {
    const immagineAttiva = document.querySelector('.immagine.active');
    const immagineAnteprimaAttiva = document.querySelector('.anteprima.immagine.active');

    // Assegnazione dell'immagine successiva
    const immagineSuccessiva = immagineAttiva.nextElementSibling;
    let immagineAnteprimaSuccessiva = immagineAnteprimaAttiva.nextElementSibling;

    // Condizione che rimuove la classe active dall'immagine attuale per assegnarlo all'immagine successiva
    if (immagineSuccessiva != null) {
        immagineAttiva.classList.remove('active');
        immagineSuccessiva.classList.add('active');
    } else {
        immagineAttiva.classList.remove('active');
        const primaImmagineArray = document.getElementById("image01");
        primaImmagineArray.classList.add('active');
    }

// ----------------------------------------------------------------------------------

    if (immagineAnteprimaSuccessiva != null) {
        immagineAnteprimaAttiva.classList.remove('active');
        immagineAnteprimaSuccessiva.classList.add('active');
    } else {
        immagineAnteprimaAttiva.classList.remove('active');
        const primaImmagineArray = document.getElementById("anteprimaImage01");
        primaImmagineArray.classList.add('active');
    }
});