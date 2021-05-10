/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età. */

var studente = {
    nome: "Giovanni",
    cognome: "Bertolini",
    eta: 24
};

for (var key in studente) {
    console.log(key, studente[key]);
}

var studenti = [{
        nome: "Giovanni",
        cognome: "Bertolini",
        eta: 24
    },
    {
        nome: "Mario",
        cognome: "Rossi",
        eta: 32
    },
    {
        nome: "Mario",
        cognome: "Rossi",
        eta: 60
    },
    {
        nome: "Luca",
        cognome: "Gialli",
        eta: 31
    },
    {
        nome: "Maria",
        cognome: "Bruni",
        eta: 44
    },
    {
        nome: "Lucia",
        cognome: "Galli",
        eta: 55
    },
    {
        nome: "Marco",
        cognome: "Camisati",
        eta: 16
    },
    {
        nome: "Nicola",
        cognome: "Repetti",
        eta: 19
    },
    {
        nome: "Simone",
        cognome: "Nazzani",
        eta: 34
    },
    {
        nome: "Anna",
        cognome: "Serafini",
        eta: 45
    }
];

for (var i = 0; i < studenti.length; i++) {
    var messaggioNome = "Il nome dello studente " + (i + 1) + " è: ";
    var messaggioCognome = "Il cognome dello studente " + (i + 1) + " è: ";
    console.log(messaggioNome, studenti[i].nome);
    console.log(messaggioCognome, studenti[i].cognome);
};

var button = document.getElementsByClassName("btn")[0];
console.log(studenti);

button.addEventListener("click", function() {
    var studente = {
        nome: "",
        cognome: "",
        eta: 0
    };
    var primaVolta = true;
    do {
        if (!primaVolta) {
            studente.nome = prompt("Errore! Inserisci il tuo nome!");
        } else {
            studente.nome = prompt("Inserisci il tuo nome!");
        }
        primaVolta = false;
    } while (!isNaN(studente.nome) || studente.nome.length < 3);
    var primaVolta = true;
    do {
        if (!primaVolta) {
            studente.cognome = prompt("Errore! Inserisci il tuo cognome!");
        } else {
            studente.cognome = prompt("Inserisci il tuo cognome!");
        }
        primaVolta = false;
    } while (!isNaN(studente.cognome) || studente.cognome.length < 2);
    var primaVolta = true;
    do {
        if (!primaVolta) {
            studente.eta = parseInt(prompt("Errore! Inserisci la tua età!"));
        } else {
            studente.eta = parseInt(prompt("Inserisci la tua età!"));
        }
        primaVolta = false;
    } while (isNaN(studente.eta) || studente.eta > 70 || studente.eta < 14);
    console.log(studente);
    studenti.push(studente);
    console.log(studenti);
});