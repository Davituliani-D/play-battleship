const randomLoc = Math.floor(Math.random() * 5);
const location1 = randomLoc;
const location2 = randomLoc + 1;
const location3 = randomLoc + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
guess = prompt("Готов, огонь! (введи число от 0 - 6): ");
if (guess < 0 || guess > 6) {
    alert("Пожалуйста введи корректное значение!");
} else {
    guesses = guesses + 1;
}
if (guess == location1 || guess == location2 || guess == location3) {
    hits = hits + 1;
    alert("ПОПАЛ!");
    } else{
        alert("ПРОМАХНУЛСЯ");
    }
if (hits == 3) {
    isSunk = true;
    alert("Ты утопил мой корабль!");
}
}
 
let stats = "Вы потопили линкор за " + guesses + " хода,значит, " + "ваша точность равна: " + (3/guesses);

alert(stats);