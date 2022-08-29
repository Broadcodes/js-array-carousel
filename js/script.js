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

