// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

// 1. creo le variabili di cui avrò bisogno per stampare in pagina
var schedaStudente = document.getElementById("studente");
var schedaStudenti = document.getElementById("studenti");
// var schedaNuovi = document.getElementById("nuovo-studente");

// 2. creo il primo oggetto studente
var studente = {
    nome: "Roberto",
    cognome: "Zeppilli",
    età: 29
};

// 2.1 lo stampo in pagina tramite un ciclo for-in
for (var chiave in studente) {
    // console.log(chiave + ":", studente[chiave]);
    schedaStudente.innerHTML += "<li>" + chiave[0].toUpperCase() + chiave.toLowerCase().slice(1) + " : " + studente[chiave] + "</li>";
}

// 3. creo un array di oggetti contente i dati di 4 studenti
var studenti = [
    {
        nome: "Andrea",
        cognome: "Barsi",
        età: 22
    },
    {
        nome: "Paolo",
        cognome: "Crespi",
        età: 28
    },
    {
        nome: "Barbara",
        cognome: "Bianchi",
        età: 24
    },
    {
        nome: "Giulia",
        cognome: "Nicolini",
        età: 32
    },
];

// 3.1 stampo in pagina, ciclando l'array di oggetti, nome e cognome degli studenti
for (var i = 0; i < studenti.length; i++) {
    var singoloStudente = studenti[i];
    // console.log(singoloStudente.nome, singoloStudente.cognome);
    schedaStudenti.innerHTML += "<li>" + singoloStudente.nome + " " + singoloStudente.cognome + "</li>";

}

// 4. do possibilità all'utente di aggiungere un nuovo studente, inserendo per ordine nome, cognome ed età
do {
    var nuovoNome = prompt("Inserisci il nome dello studente");
    nuovoNome = nuovoNome[0].toUpperCase() + nuovoNome.toLowerCase().slice(1);
} while (!isNaN(nuovoNome));

do {
    var nuovoCognome = prompt("Inserisci il cognome dello studente");
    nuovoCognome = nuovoCognome[0].toUpperCase() + nuovoCognome.toLowerCase().slice(1);
} while (!isNaN(nuovoCognome));

do {
    var nuovaEta = parseInt(prompt("Inserisci l'età dello studente"));
} while (isNaN(nuovaEta));

// 4.1 creo un oggetto in cui inserisco le varibili precedenti come valore delle chiavi
var nuovoStudente = {
    nome: nuovoNome,
    cognome: nuovoCognome,
    età: nuovaEta
}

// 4.2 aggiungo i dati del nuovo studente (inseriti dall'utente) all'interno dell'array di oggetti 
studenti.push(nuovoStudente);
console.log(studenti);

// 4.3 stampo in pagina i dati del nuovo studente 
schedaStudenti.innerHTML += "<li>" + nuovoStudente.nome + " " + nuovoStudente.cognome + "</li>";

