let myName = 'Christoffer'; // Deklarerar att variabeln kan enbart vara en sträng
let age = 34;
let isAwesome = true;
let greeting = 'Hello'; // | betyder antingen så antingen en sträng eller en siffra
let names = ['Ada', 'Christoffer']; // En array med strängar
// lastname är en frivillig parameter i funktionen nedan och måste alltså inte få ett värdet vi
// funktionsanropet. Detta visas med ett ? efter namnet.
function getName(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    return fullName;
}
const fullName = getName('Ada', 'Lovelace'); // getName() returnerar en sträng
const element = document.querySelector('p');
let myAge = 34; // Kan vara vilken datatyp som helst, bör användas väldigt restriktivt
