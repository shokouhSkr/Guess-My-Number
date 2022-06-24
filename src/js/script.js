"use strict";

const secretNumber = Math.trunc(Math.random() * 50) + 1;

document.querySelector("#secretNumber").textContent = secretNumber;

document.querySelector("#check").addEventListener("click", function () {
  const guessNumber = +document.querySelector("#guess").value;
  // console.log(guessNumber, typeof guessNumber);

  if (!guessNumber) {
    document.querySelector("#message").textContent = "⛔ No Number!";
  } else if (guessNumber === secretNumber) {
    document.querySelector("#message").textContent = "🎉 Correct Number";
  } else if (
    (guessNumber > secretNumber && guessNumber - secretNumber < 5) ||
    (secretNumber > guessNumber && secretNumber - guessNumber < 5)
  ) {
    document.querySelector("#message").textContent = "😍 So Close";
  } else if (guessNumber > secretNumber) {
    document.querySelector("#message").textContent = "📈 Too High!";
  } else if (secretNumber > guessNumber) {
    document.querySelector("#message").textContent = "📉 Too Low!";
  }
});
