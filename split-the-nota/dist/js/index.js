/**
 * 1. När man klickar på knappen så hämta värden från inputfälten
 * och spara i variabler.
 * 2. Räkna ut dricks och returnera dricksen
 * 3. Addera dricks med summan
 * 4. Dividera totala summan med antalet vänner och returnera resultatet
 * 5. Visa resultatet
 */
const buttonElem = document.getElementById('calculateButton');
function calculateTip(sum, tip) {
    const calculatedTip = sum * tip;
    const total = sum + calculatedTip;
    return total;
}
function divideTotal(total, numberOfFriends) {
    const sumDivided = total / numberOfFriends;
    return sumDivided;
}
function showDividedSum(sumDivided) {
    const showSumElem = document.getElementById('showSum');
    const formElem = document.getElementById('inputForm');
    const friendSumElem = document.getElementById('friendSum');
    formElem.classList.toggle('hide');
    showSumElem.classList.toggle('hide');
    friendSumElem.innerHTML = `${sumDivided} kr`;
}
buttonElem.addEventListener('click', () => {
    const sumElem = document.getElementById('sum'); // Hämtar HTML elementet och deklarerar om det som ett HTMLInputElement så vi kan använda .value
    const sum = parseInt(sumElem.value);
    const numberOfFriendsElem = document.getElementById('numberOfFriends');
    const numberOfFriends = parseInt(numberOfFriendsElem.value);
    const tipElem = document.getElementById('tip');
    const tip = parseFloat(tipElem.value);
    const total = calculateTip(sum, tip);
    const sumDivided = divideTotal(total, numberOfFriends);
    showDividedSum(sumDivided);
});
