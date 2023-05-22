'use strict';

//scrivo l'array che contiene tutte le mail che hanno l'accesso
const mailList = ['mario.rossi@mail.com', 'luigi.verdi@mail.com', 'pinco.pallino@mail.com'];

//chiedo la mail all'utente
let mailUser = prompt('Qual è la tua mail?');

//controllo se la mail è presenta tra quelle che hanno l'accesso
let flag = false;
for (let i = 0; i < mailList.length; i++) {
    if (mailUser === mailList[i]) {
        flag = true;
    }
    console.log(flag)
    console.log(mailUser)
    console.log(mailList[i])
}
console.log(flag)
//invio a schermo un messaggio per dire all'utente se la mail è presente o meno nell'elenco
if (flag == true ) {
    console.log(flag)
    alert('è consentito l\'accesso con questa mail');
} else {
    console.log(flag)
    alert('non è consentito l\'accesso con questa mail!');
}