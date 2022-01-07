let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random()*10);

const targetNumber = generateTarget();

const getAbsolute = (num1, num2) => {
  return Math.abs(num1-num2);
}

const compareGuesses = (userGeuss, computerGeuss, targetNumber) => {
  const userDistance = getAbsolute(userGeuss, targetNumber);
  const computerDistance = getAbsolute(computerGeuss, targetNumber);
  if ((userDistance === 0) || (userDistance === 0 && computerDistance === 0)) {
    return true;
  }
  if (userDistance < computerDistance) {
    return true;
  } else {
    return false;
  }
};

const updateScore = winner => {
  if (winner === 'human') {
    humanScore ++;
  } 
  if (winner === 'computer') {
    computerScore ++;
  }
} 

const advanceRound = () => currentRoundNumber ++;



