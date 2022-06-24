"use strict";

let score = 10;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 50) + 1;

// check button
document.querySelector("#checkBtn").addEventListener("click", function () {
  const guessNumber = +document.querySelector("#guessNumber").value;
  // console.log(guessNumber, typeof guessNumber);

  if (!guessNumber) {
    document.querySelector("#message").textContent = "⛔ No Number!";
  } else if (guessNumber === secretNumber) {
    document.querySelector("#secretNumber").textContent = secretNumber;

    document.querySelector("#message").textContent = "🎉 Correct Number";

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector("#highScore").textContent = highScore;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector("#secretNumber").style.width = "150px";
  } else if (score > 1) {
    if (
      (secretNumber > guessNumber && secretNumber - guessNumber < 5) ||
      (guessNumber > secretNumber && guessNumber - secretNumber < 5)
    ) {
      document.querySelector("#message").textContent = "😍 So Close!";
      score--;
      document.querySelector("#score").textContent = score;
    } else if (secretNumber > guessNumber) {
      document.querySelector("#message").textContent = "📉 Too Low!";
      score--;
      document.querySelector("#score").textContent = score;
    } else if (guessNumber > secretNumber) {
      document.querySelector("#message").textContent = "📈 Too High!";
      score--;
      document.querySelector("#score").textContent = score;
    }
  } else {
    document.querySelector("#message").textContent = "💥 You Lost The Game!";

    document.querySelector("#score").textContent = 0;

    document.querySelector("body").style.backgroundColor = "#ff0000";
  }
});

// reset the game
document.querySelector("#againBtn").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 50) + 1;

  document.querySelector("#message").textContent = "Start guessing...";

  document.querySelector("#secretNumber").textContent = "?";

  document.querySelector("#score").textContent = score;

  document.querySelector("#guessNumber").value = "";

  document.querySelector("body").style.backgroundColor = "#1f2937";

  document.querySelector("#secretNumber").style.width = "70px";
});
