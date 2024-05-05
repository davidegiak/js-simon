// Generate 5 numeri casuali. Può tornarvi utile una funzione? Provate a stamparli prima in console e poi in pagina.

let numbers = [];
const userNumbers = [];
let vincenti = [];
let newUsers;
let numeroSingolo;

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

while (numbers.length < 5) {
    numeroSingolo = getRandomInt(100)
    let numeriInPagina = document.querySelector("h1");
    if (!numbers.includes(numeroSingolo)) {
        numbers.push(numeroSingolo);
        console.log(numbers);
        numeriInPagina.append(numeroSingolo + ",");
    }
    // Impostate un timer a 3 secondi, testatelo con un console.log. Una volta funzionante fate in modo che nasconda i numeri in pagina.
    setTimeout (function(){
        numeriInPagina.innerHTML = "";
        numbers = 
        // Sempre nella funzione temporizzata, mostrate un prompt all'utente finchè non vi ritrovate con 5 numeri salvati. Poi stampate tutto l'array dei numeri utente in console.
        while (userNumbers.length < 5) {
            newUsers = prompt("inserisci un numero");
            userNumbers.push(newUsers);
            console.log(userNumbers);
            if (numbers == newUsers) {
                vincenti.push(newUsers);
                console.log(newUsers);
            }
        }
        // else if (newUsers == numeroSingolo) {
        //     vincenti.push(numerosingolo);
        //     console.log("u loose"); 
        //     console.log(vincenti);
        // }

    }, 1000 * 3);
}


