const options = ["Rock", "Paper", "Scissors"]

let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * 3)]
    return computerChoice
}

function game() {


    for (let session = 0; session<5; session++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Rock, Paper or Scissors?");

        playRound(playerSelection, computerSelection)        

    }

    let result = (playerScore == computerScore) ? "Overall Tie" : (playerScore > computerScore) ? "You win!" : "You LOSE!";
    alert(`**FINAL SCORES**\nComputer: ${computerScore}\nYou: ${playerScore} \n\n${result}`)

}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)

    if ((playerSelection === "Rock" && computerSelection === "Scissors")
    || playerSelection === "Paper" && computerSelection === "Rock" 
    || playerSelection === "Scissors" && computerSelection === "Paper") {

         alert(`Computer Selection: ${computerSelection} \nPlayer Selection: ${playerSelection} \n\nYou win! ${playerSelection} beats ${computerSelection}`)

         playerScore += 1;
    }

    if ((computerSelection === "Rock" && playerSelection === "Scissors")
    || computerSelection === "Paper" && playerSelection === "Rock" 
    || computerSelection === "Scissors" && playerSelection === "Paper") {

        alert(`Computer Selection: ${computerSelection} \nPlayer Selection: ${playerSelection}\n\nYou LOSE! ${computerSelection} beats ${playerSelection}`)

        computerScore += 1
    }

    if (computerSelection === playerSelection) {

        alert(`Computer Selection: ${computerSelection} \nPlayer Selection: ${playerSelection}\n\nTie. Replay Round!`)

        computerSelection = getComputerChoice();
        playerSelection = prompt("Rock, Paper or Scissors?");
        playRound(playerSelection, computerSelection)
    }

}


game()