// ROCK-PAPER-SCISSORS - Pure JS Logic
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase().trim();
  const computer = computerSelection.toLowerCase();
  
  if (player === computer) return "Tie!";
  
  const playerWins = 
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper');
    
  return playerWins 
    ? `You win! ${player} beats ${computer}`
    : `You lose! ${computer} beats ${player}`;
}

// Quick test
console.log("--- RPS Logic Test ---");
const moves = ['rock', 'paper', 'scissors', 'Rock', '  SCISSORS  '];
moves.forEach(move => {
  const comp = getComputerChoice();
  console.log(`You: ${move.trim()} | PC: ${comp} → ${playRound(move, comp)}`);
});

// Bonus: 5 auto rounds
console.log("\n--- 5 Auto Rounds ---");
for (let i = 1; i <= 5; i++) {
  const p = getComputerChoice();
  const c = getComputerChoice();
  console.log(`Round ${i}: ${playRound(p, c)}`);
}