let myName: string = 'Christoffer'; // Deklarerar att variabeln kan enbart vara en sträng
let age: number = 34;
let isAwesome: boolean = true;

let greeting: string | number = 'Hello'; // | betyder antingen så antingen en sträng eller en siffra

let names: string[] = ['Ada', 'Christoffer']; // En array med strängar

// lastname är en frivillig parameter i funktionen nedan och måste alltså inte få ett värdet vi
// funktionsanropet. Detta visas med ett ? efter namnet.
function getName(firstName: string, lastName?: string): string { // returnerar en sträng
    const fullName: string = `${firstName} ${lastName}`;

    return fullName;
}

const fullName: string = getName('Ada', 'Lovelace'); // getName() returnerar en sträng

const element: HTMLElement = document.querySelector('p');

let myAge: any = 34; // Kan vara vilken datatyp som helst, bör användas väldigt restriktivt