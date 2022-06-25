"use strict";

// initial values
let score = 10;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 50) + 1;

/**************************************************************/
// functions
const displayMessage = function (message) {
  document.querySelector("#message").textContent = message;
};

const calcScore = function () {
  score--;
  document.querySelector("#score").textContent = score;
};

const setColorBody = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

/**************************************************************/
// check button
document.querySelector("#checkBtn").addEventListener("click", function () {
  const guessNumber = +document.querySelector("#guessNumber").value;
  // console.log(guessNumber, typeof guessNumber);

  // when guess box is empty
  if (!guessNumber) {
    displayMessage("⛔ No Number!");

    // when player wins
  } else if (guessNumber === secretNumber) {
    document.querySelector("#secretNumber").textContent = secretNumber;
    displayMessage("🎉 Correct Number");

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector("#highScore").textContent = highScore;
    setColorBody("#60b347");
    document.querySelector("#secretNumber").style.width = "150px";

    // when player is guessing
  } else if (score > 1) {
    if (secretNumber !== guessNumber && Math.abs(secretNumber - guessNumber) < 5) {
      displayMessage("😍 So Close!");
      calcScore();
    } else if (secretNumber !== guessNumber) {
      displayMessage(secretNumber > guessNumber ? "📉 Too Low!" : "📈 Too High");
      calcScore();
    }

    // when player loses
  } else {
    displayMessage("💥 You Lost The Game!");
    document.querySelector("#score").textContent = 0;
    setColorBody("#ff0000");
  }
});

// reset the game (again button)
document.querySelector("#againBtn").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  displayMessage("Start guessing...");
  document.querySelector("#secretNumber").textContent = "?";
  document.querySelector("#score").textContent = score;
  document.querySelector("#guessNumber").value = "";
  setColorBody("#1f2937");
  document.querySelector("#secretNumber").style.width = "70px";
});
