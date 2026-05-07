// Line 1: Comment (documentation)
// ROCK-PAPER-SCISSORS - Pure JS Logic - Lines 3-6: Function to generate random computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];  // Array with 3 options
  return choices[Math.floor(Math.random() * 3)];  // Random index: 0, 1, or 2
}
// Lines 8-21: Function to determine winner of one round
function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase().trim();  // Normalize input
  const computer = computerSelection.toLowerCase();      // Normalize computer choice
  // Line 12: Check for tie
if (player === computer) return "Tie!";
// Lines 14-17: Check all winning conditions for player
const playerWins =
  (player === 'rock' && computer === 'scissors') ||
  (player === 'paper' && computer === 'rock') ||
  (player === 'scissors' && computer === 'paper');
  // Lines 19-21: Ternary operator for return value
return playerWins
  ? `You win! ${player} beats ${computer}`
  : `You lose! ${computer} beats ${player}`;
  if (playerWins) {
  return `You win! ${player} beats ${computer}`;
} else {
  return `You lose! ${computer} beats ${player}`;
}
// Lines 24-30: Test the game with different inputs
console.log("--- RPS Logic Test ---");
const moves = ['rock', 'paper', 'scissors', 'Rock', '  SCISSORS  '];
moves.forEach(move => {
  const comp = getComputerChoice();
  console.log(`You: ${move.trim()} | PC: ${comp} → ${playRound(move, comp)}`);
});
// Lines 32-36: Bonus - Play 5 automatic rounds
console.log("\n--- 5 Auto Rounds ---");
for (let i = 1; i <= 5; i++) {
  const p = getComputerChoice();  // Simulating player for demo
  const c = getComputerChoice();
  console.log(`Round ${i}: ${playRound(p, c)}`);
}

