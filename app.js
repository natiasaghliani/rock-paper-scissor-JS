const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const winner = (player, computer) => {
    const userChoice = document.querySelector(".user-choice");
    const computerChoice = document.querySelector(".computer-choice");

    userChoice.innerHTML = `<img src="images/${player}.jpeg" alt="${player}" style="border-radius:8px">`;
    computerChoice.innerHTML = `<img src="images/${computer}.jpeg" alt="${computer}" style="border-radius:8px">`;

    const playerScoreDisplay = document.querySelector(".p-count");
    const computerScoreDisplay = document.querySelector(".c-count");
    const thisResult = document.querySelector(".this-result");

    if (
      (player === "rock" && computer === "scissor") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissor" && computer === "paper")
    ) {
      thisResult.textContent = ">";
      playerScore++;
    } else if (
      (computer === "rock" && player === "scissor") ||
      (computer === "paper" && player === "rock") ||
      (computer === "scissor" && player === "paper")
    ) {
      thisResult.textContent = "<";

      computerScore++;
    } else {
      thisResult.textContent = "=";
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
  };

  const playGame = () => {
    const playerOptions = document.querySelectorAll(".options img");
    const computerOptions = ["rock", "paper", "scissor"];

    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const movesLeft = document.querySelector(".movesleft");
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        document.querySelector(
          ".user-choice"
        ).innerHTML = `<img src="${this.getAttribute(
          "src"
        )}" alt="${this.getAttribute("alt")}">`;
        document.querySelector(
          ".computer-choice"
        ).innerHTML = `<img src="images/${computerChoice}.jpeg" alt="${computerChoice}">`;

        winner(this.getAttribute("alt").toLowerCase(), computerChoice);

        if (moves == 10) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });

    const gameOver = (playerOptions, movesLeft) => {
      const chooseMove = document.querySelector(".move");
      const result = document.querySelector(".result");
      const reloadBtn = document.querySelector(".reload");
      const computerChoice = document.querySelector(".computer-choice");
      const userChoice = document.querySelector(".user-choice");
      const thisResult = document.querySelector(".this-result");

      playerOptions.forEach((option) => {
        option.style.display = "none";
        computerChoice.style.display = "none";
        userChoice.style.display = "none";
        thisResult.style.display = "none";
      });

      chooseMove.innerText = "Game Over!!";
      chooseMove.style.fontSize = "20px";
      movesLeft.style.display = "none";

      if (playerScore > computerScore) {
        result.style.fontSize = "40px";
        result.innerText = "You Won The Game";
        result.style.color = "#308D46";
      } else if (playerScore < computerScore) {
        result.style.fontSize = "40px";
        result.innerText = "You Lost The Game";
        result.style.color = "red";
      } else {
        result.style.fontSize = "40px";
        result.innerText = "Tie";
        result.style.color = "grey";
      }
      reloadBtn.innerText = "Restart";
      reloadBtn.style.fontSize = "15px";
      reloadBtn.style.display = "flex";
      reloadBtn.addEventListener("click", () => {
        window.location.reload();
      });
    };
  };

  playGame();
};

game();
