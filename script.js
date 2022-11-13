let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random()*10);
}

function compareGuesses(userChoice, computerChoice, target) {
  const userDifference = Math.abs(userChoice - target)
  const computerDifference = Math.abs(computerChoice - target)

  if (userDifference < computerDifference) {
    return true
  } else if (userDifference > computerDifference) {
    return false
  } else {
    return 'TIE! Same Guess.'
  }
}

console.log(compareGuesses())

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}