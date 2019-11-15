// Esercitazione 1=>repo: js-check-mail
// Creare un array contenente una lista di email.
// Attraverso un prompt chiedere all'utente la sua email.
// Controllare se l'email dell'utente è presente nell'array e stampare un messaggio appropriato.
// -----------------------------------------------------------------------------

// inizializzo l'elenco degli utenti
var users = ["nome.cognome@domino.it",
    "uno@numeri.com",
    "due@numeri.com",
    "tre@numeri.com",
    "quattro@numeri.com",
    "cinque@numeri.com",
    "sei@numeri.com",
    "sette@numeri.com",
    "otto@numeri.com"
];
// uso un flag per sapere se la ricerca va a buon fine
var found = false;
// chiedo all'utente il suo indirizzo e-mail
var email = prompt("Inserisci il tuo indirizzo e-mail: ", "nome.cognome@domino.it");

// scandisco l'array per cercare l'input dell'utente
for (var i = 0; i < users.length; i++) {
    // console.log("i=", i, "\nusers[i]=", users[i]);
    if (users[i] == email) {
        found = true;
        // console.log("i=", i, "\n users[i]=", users[i]);
        // non proprio efficiente, continua a ciclare anche se ha già trovato l'elemento cercato
        // ci vorrebbe un ciclo while..,
        // o un break??,
        // o impostare la condizione di uscita (user[i] == email) + 1 if fuori dal ciclo
    }
}

// scansione terminata, verifico risultato della ricerca
if (found) {
    // utente riconosciuto
    console.log("L'utente risulta registrato");
} else {
    // utente non riconosciuto, riprova o registrati
    console.log("L'utente non è presente");
}