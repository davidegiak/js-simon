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

        numeriInPagina.append(numeroSingolo + ",");
    }
    // Impostate un timer a 3 secondi, testatelo con un console.log. Una volta funzionante fate in modo che nasconda i numeri in pagina.
    
    setTimeout (function(){
        console.log(numeroSingolo);
    }, 1000 * 3);
}
