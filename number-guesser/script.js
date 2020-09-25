let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, compGuess, secretNum) {
  const deltaHuman = getAbsoluteDistance(humanGuess, secretNum);
  const deltaComp = getAbsoluteDistance(compGuess, secretNum);
  return deltaHuman <= deltaComp;
}

function getAbsoluteDistance(num1, num2) {
  if (num1 >= num2) {
    return num1 - num2;
  } else if (num1 < num2) {
    return num2 - num1;
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
