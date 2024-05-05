// Generate 5 numeri casuali. Può tornarvi utile una funzione? Provate a stamparli prima in console e poi in pagina.

let numbers = [];
const userNumbers = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

while (numbers.length < 5) {
    let numeroSingolo = getRandomInt(100)
    let numeriInPagina = document.querySelector("h1");
    if (!numbers.includes(numeroSingolo)) {
        numbers.push(numeroSingolo);
    }
    // Impostate un timer a 3 secondi, testatelo con un console.log. Una volta funzionante fate in modo che nasconda i numeri in pagina.
    setTimeout (function(){
        console.log(numeroSingolo);
        numeriInPagina.append(numeroSingolo + ",");
        // Sempre nella funzione temporizzata, mostrate un prompt all'utente finchè non vi ritrovate con 5 numeri salvati. Poi stampate tutto l'array dei numeri utente in console.
        while (userNumbers.length < 5) {
            let newUsers = prompt("inserisci un numero");
            userNumbers.push(newUsers);
            console.log(userNumbers);
        }

    }, 1000 * 3);
}


