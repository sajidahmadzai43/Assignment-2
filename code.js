/* Sajid Ahmadzai Game JS file*/
let gameHistory = [];

// Load sound effects
let winSound = new Audio('win.mp3');
let loseSound = new Audio('lose.mp3');
let pushSound = new Audio('push.wav');

function playGame() {
    let die1 = Math.ceil(Math.random() * 6);
    let die2 = Math.ceil(Math.random() * 6);
    let sum = die1 + die2;

    document.getElementById("output").innerHTML = `Die 1: ${die1} <br> Die 2: ${die2} <br> Sum: ${sum} <br>`;

    let result;
    if (sum === 7 || sum === 11) {
        result = "Lost (CRAPS)";
        document.getElementById("output").innerHTML += "CRAPS – you lose!";
        loseSound.play(); // Play lose sound
    } else if (die1 === die2 && die1 % 2 === 0) {
        result = "Won";
        document.getElementById("output").innerHTML += "You won!";
        winSound.play(); // Play win sound
    } else {
        result = "Pushed";
        document.getElementById("output").innerHTML += "You pushed!";
        pushSound.play(); // Play push sound
    }

    gameHistory.push(result);

    let historyList = document.getElementById("historyList");
    historyList.innerHTML = "";
    for (let i = gameHistory.length - 1; i >= Math.max(gameHistory.length - 5, 0); i--) {
        let listItem = document.createElement("li");
        listItem.textContent = gameHistory[i];
        historyList.appendChild(listItem);
    }
}
