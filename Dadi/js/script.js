'use strict';

//dichiaro le variabili
let numberUser;
let numberComputer;
let messaggioOutput = document.getElementById('output');

document.getElementById('gioca').addEventListener("click", function() {
    //genero due numeri random da 1 a 6 per l'utente e il computer
    numberUser = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    numberComputer = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    console.log(numberUser);
    console.log(numberComputer);
    //controllo chi ha vinto
    if (numberUser == numberComputer) {
        console.log(numberUser);
        messaggioOutput.innerHTML = `è un pareggio, il tuo numero è ${numberUser}`;
    }
    else if (numberUser > numberComputer) {
        messaggioOutput.innerHTML = `hai vinto, il tuo numero è ${numberUser}`;
    }
    else {
        messaggioOutput.innerHTML = `hai perso, il tuo numero è ${numberUser}`;
    }
})