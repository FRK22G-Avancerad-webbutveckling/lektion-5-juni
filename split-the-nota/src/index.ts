/**
 * 1. När man klickar på knappen så hämta värden från inputfälten
 * och spara i variabler.
 * 2. Räkna ut dricks och returnera dricksen
 * 3. Addera dricks med summan
 * 4. Dividera totala summan med antalet vänner och returnera resultatet
 * 5. Visa resultatet
 */

const buttonElem: HTMLElement = document.getElementById('calculateButton');

function calculateTip(sum: number, tip: number): number {
    const calculatedTip: number = sum * tip;
    const total: number = sum + calculatedTip;

    return total;
}

function divideTotal(total: number, numberOfFriends: number): number {
    const sumDivided: number = total / numberOfFriends;

    return sumDivided;
}

function showDividedSum(sumDivided: number): void { // Void innebär att funktionen returnerar inget
    const showSumElem: HTMLElement = document.getElementById('showSum');
    const formElem: HTMLElement = document.getElementById('inputForm');
    const friendSumElem: HTMLElement = document.getElementById('friendSum');

    formElem.classList.toggle('hide');
    showSumElem.classList.toggle('hide');
    friendSumElem.innerHTML = `${sumDivided} kr`;
}

buttonElem.addEventListener('click', () => {
    const sumElem = document.getElementById('sum') as HTMLInputElement; // Hämtar HTML elementet och deklarerar om det som ett HTMLInputElement så vi kan använda .value
    const sum: number = parseInt(sumElem.value);

    const numberOfFriendsElem = document.getElementById('numberOfFriends') as HTMLInputElement;
    const numberOfFriends: number = parseInt(numberOfFriendsElem.value);

    const tipElem = document.getElementById('tip') as HTMLInputElement;
    const tip: number = parseFloat(tipElem.value);
    
    const total: number = calculateTip(sum, tip);
    const sumDivided = divideTotal(total, numberOfFriends);
    
    showDividedSum(sumDivided);
});