
const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const favouriteColor = prompt('Inserisci il tuo colore preferito');

const generatedPsw = firstName + lastName + favouriteColor + 21;

document.getElementById('output').innerHTML =
`
    Il tuo nome e': ${firstName} <br>
    Il tuo cognome e': ${lastName} <br>
    Il tuo colore preferito e': ${favouriteColor} <br>
    La tua nuova password e': ${generatedPsw}
`;