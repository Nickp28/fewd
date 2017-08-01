// Create a variable humanScore. Give it a value of the number 0.
// Create a variable computerScore. Give it a value of the number 0.
var humanScore = 0;
var computerScore = 0;
var computer = "";
var human = "";

function randomGenerator(computer) {
  var random = Math.floor(Math.random()* 3) +1;
  console.log("Random number is " + random);
  var temp;
  if (random === 1){
    temp = "rock";
  } else if (random === 2) {
    temp = "paper";
} else {
    temp = "scissors";
  }
  return temp;
}
// Create a function play. It should accept two parameters: humanPlay and computerPlay.
// Inside the function:

  // Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
  // For example: "You played rock. The bot played scissors."

  // If the human play is equal to the computer play
    // Log "You tied. :|" to the console.
  // Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
  // humanPlay is 'rock' and the computerPlay is 'scissors' OR
  // humanPlay is 'scissors' and the computerPlay is 'paper'
    // Log "You win! :)" to the console
    // Add one to the humanScore variable (be sure to use += )
  // Otherwise log "You lose! :(" to the console
    // Add one to the computerScore variable (be sure to use += )
function play (humanPlay) {
  var computerPlay = randomGenerator();
    console.log("The computer play is " + computerPlay);
  if (humanPlay === computerPlay) {
    console.log("You Tied.");
  } else if (humanPlay === "paper" && computerPlay === "rock" || humanPlay === "rock" && computerPlay === "scissors" || humanPlay === "scissors" && computerPlay === "paper") {
    console.log("You Won!");
    humanScore *= 1;
} else if (computerPlay === "paper" && humanPlay === "paper" || computerPlay === "rock" && humanPlay === "scissors" || computerPlay === "scissors" && humanPlay === "paper") {
  console.log("You Lost! Limited tries left.")
  computerScore *= 1;
} else {
  console.log("Out of Tries...");
}
}


  // Log "You have {humanScore} points" to the console
  // For example: "You have 0 points"
  // Log "The bot has {computerScore} points" to the console.
  // For example: "The bot has 3 points"


// After defining the function, call the function 5 - 6 times,
// Providing a different play for the computer and human each time.
// Hint: You'll need to use two arguments
// each time you call the play function.
play("rock");
play("paper");
play("scissors");

play("scissors", "paper");
// BONUS:
// Create a "best of 3" version

// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.
