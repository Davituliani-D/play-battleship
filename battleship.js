const location1 = 3;
const location2 = 4;
const location3 = 5;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
guess = prompt("Ready, aim, fire! (enter a number 0 - 6): ");
if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
} else {
    guesses = guesses + 1;
}
if (guess == location1 || guess == location2 || guess == location3) {
    hits = hits + 1;
    alert("HIT!");
    } else{
        alert("MISS");
    }
if (hits == 3) {
    isSunk = true;
    alert("You sunk my battlesheep!");
}
}

let stats = "You took " + guesses + " guesses to sink the battleship, " + "wich means your shooting accuracy was " + (3/guesses);

alert(stats);