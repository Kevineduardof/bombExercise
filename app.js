const bomb = document.getElementById("expButton");
const bombImg = document.getElementById("bomb");
const timerString = document.getElementById("timer");

const bip = new Audio("./audio/bip.mp3");
const defused = new Audio("./audio/bombDefused.mp3");
const boom = new Audio("./audio/hq-explosion-6288.mp3");

let timer = 60;
const explosionHappen = setTimeout(() => {
    bomb.src = "img/explodiu.png";
}, 60000);

const timerBomb = setInterval(() => {
    timer--;
    
    timerString.innerText = `Time Left: ${timer}`;
    
    bip.play();

    if (timer === 0) {
        clearInterval(timerBomb);
        timerString.innerText = "BOOM!";
        bombImg.src = "img/explodiu.png";
        bomb.removeEventListener("click", bombWasDefuse);
        boom.play();
    }
}, 1000);

bomb.addEventListener("click", bombWasDefuse);

function bombWasDefuse() {
    clearTimeout(explosionHappen);
    clearInterval(timerBomb);

    bombImg.src = "img/apagado.png";
    timerString.innerText = "Bomb has been defused";
    defused.play();

    bip.pause();
    
    bomb.removeEventListener("click", bombWasDefuse);
};