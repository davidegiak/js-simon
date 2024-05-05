// Generate 5 numeri casuali. Può tornarvi utile una funzione? Provate a stamparli prima in console e poi in pagina.

let numbers = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

while (numbers.length < 5) {
    let numeroSingolo = getRandomInt(100)
    let numeriInPagina = document.querySelector("h1");
    if (!numbers.includes(numeroSingolo)) {
        numbers.push(numeroSingolo);
        console.log(numeroSingolo);

        numeriInPagina.append(numeroSingolo + ",");
    }
}