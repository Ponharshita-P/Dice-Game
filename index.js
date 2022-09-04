var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the player name

function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

const button = document.querySelector("#roll-btn");
const result = document.querySelector("h1");

function diceRoll(){
  
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage = "dice" + randomNumber1 + ".png";
  
  var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
  
  var image1 = document.querySelectorAll("img")[0];
  
  image1.setAttribute("src", randomImageSource);
  
  
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  
  
  //If player 1 wins
  
  if (randomNumber1 > randomNumber2) {
    result.innerHTML = "🏁 PLAYER 1 WON";
  }
  else if (randomNumber2 > randomNumber1) {
    result.innerHTML = "🏁 PLAYER 2 WON";
  }
  else {
    result.innerHTML = "DRAW! 🙅🏻‍♀️";
  }
}


button.addEventListener('click', diceRoll);
