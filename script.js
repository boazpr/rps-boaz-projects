let playerScore = 0;
let computerScore = 0;
let round = 1;
const maxRounds = 5;

const images = {
    rock: "https://cdn-icons-png.flaticon.com/512/3565/3565418.png",
    paper: "https://cdn-icons-png.flaticon.com/512/3565/3565425.png",
    scissors: "https://cdn-icons-png.flaticon.com/512/3565/3565430.png"
};

function playGame(playerChoice) {

    if (round > maxRounds) return;

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("playerImg").src = images[playerChoice];
    document.getElementById("computerImg").src = images[computerChoice];

    document.getElementById("playerImg").classList.add("animate");
    document.getElementById("computerImg").classList.add("animate");

    setTimeout(() => {
        document.getElementById("playerImg").classList.remove("animate");
        document.getElementById("computerImg").classList.remove("animate");
    }, 500);

    let resultText = "";

    if (playerChoice === computerChoice) {
        resultText = "It's a Tie!";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        resultText = "You Win This Round!";
    }
    else {
        computerScore++;
        resultText = "Computer Wins This Round!";
    }

    document.getElementById("result").innerText = resultText;
    document.getElementById("score").innerText =
        `Player: ${playerScore} | Computer: ${computerScore}`;

    round++;
    document.getElementById("round").innerText = round > 5 ? 5 : round;

    if (round > maxRounds) {
        if (playerScore > computerScore) {
            document.getElementById("result").innerText = "🎉 You Won The Game!";
        } else if (computerScore > playerScore) {
            document.getElementById("result").innerText = "💻 Computer Won The Game!";
        } else {
            document.getElementById("result").innerText = "🤝 Game Draw!";
        }
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;

    document.getElementById("round").innerText = round;
    document.getElementById("score").innerText = "Player: 0 | Computer: 0";
    document.getElementById("result").innerText = "";
    document.getElementById("playerImg").src = "";
    document.getElementById("computerImg").src = "";
}
