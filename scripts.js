var randomNumberforFirstDice;
var randomNumberforSecoundDice;

randomNumberforFirstDice = Math.floor(Math.random() * 6) + 1;
randomNumberforSecoundDice = Math.floor(Math.random() * 6) + 1;

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumberforFirstDice + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumberforSecoundDice + ".png");

if(sessionStorage.getItem("is_reloaded")) {
    playDiceGame();
}

sessionStorage.setItem("is_reloaded", true);

function playDiceGame() {
    if(randomNumberforFirstDice > randomNumberforSecoundDice) {
        document.querySelector("h1").innerHTML = "<i class='fas fa-flag'></i> Player 1 Wins!";
    } else if(randomNumberforSecoundDice > randomNumberforFirstDice) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! <i class='fas fa-flag'></i>";
    } else {
        document.querySelector("h1").innerText = "Draw!";
    }
}