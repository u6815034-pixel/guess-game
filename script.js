let targetNumber = 0;
let attempt = 0;

const guessInput = document.getElementById("guess-value");
const guessBtn = document.getElementById("guess-btn");
const restartBtn = document.getElementById("restart-btn");
const attemptText = document.getElementById("attempt");
const result = document.getElementById("result");

// Initial State
guessInput.value = "";
attemptText.innerText = "0";
result.innerText = "";

// Restart Button
restartBtn.onclick = function () {

    targetNumber = Math.floor(Math.random() * 20) + 1;

    attempt = 0;

    attemptText.innerText = attempt;

    result.innerText = "";

    guessInput.value = "";

    restartBtn.style.display = "none";
    guessBtn.style.display = "inline-block";

    guessInput.focus();

    console.log(targetNumber);
};

// Guess Button
guessBtn.onclick = function () {

    let value = guessInput.value;

    if (value == "" || isNaN(value)) {
        return;
    }

    let guess = Number(value);

    attempt++;

    attemptText.innerText = attempt;

    if (guess > targetNumber) {

        result.innerText = guess + " is too high";

    }
    else if (guess < targetNumber) {

        result.innerText = guess + " is too low";

    }
    else {

        result.innerText = "You WIN";

        guessBtn.style.display = "none";
        restartBtn.style.display = "inline-block";

        return;
    }

    if (attempt >= 5) {

        result.innerText = "You LOSE";

        guessBtn.style.display = "none";
        restartBtn.style.display = "inline-block";
    }

    guessInput.value = "";
    guessInput.focus();
};