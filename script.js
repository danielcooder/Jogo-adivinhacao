
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const highScoreDisplay = document.querySelector(".high-score");

const randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;
let highScore = localStorage.getItem("highScore") || Infinity;
let highScorePlayer = localStorage.getItem("highScorePlayer") || "Anonymous";

function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");

    if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide");
        screen2.classList.remove("hide");

        if (xAttempts <= highScore) {
            highScore = xAttempts;
            highScorePlayer = prompt("Parabéns! Você alcançou um novo recorde! Por favor, insira seu nome:");
            localStorage.setItem("highScore", highScore);
            localStorage.setItem("highScorePlayer", highScorePlayer);
        }

        document.querySelector(".screen2 h2").innerText = `Você acertou em ${xAttempts} tentativa(s).`;

        updateHighScoreDisplay();
    }

    inputNumber.value = "";

    xAttempts++;
}

function updateHighScoreDisplay() {
    highScoreDisplay.textContent = `Record : ( ${highScore} )    ${highScorePlayer}`;
}

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

btnTry.addEventListener('click', handleTryClick);

btnReset.addEventListener('click', function () {
    screen1.classList.remove("hide");
    screen2.classList.add("hide");
    xAttempts = 1;

    xAttempts++
});


updateHighScoreDisplay();
