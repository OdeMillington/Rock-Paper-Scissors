const options = ["Rock", "Paper", "Scissors"]

let playerScore = 0
let computerScore = 0


const playerscore = document.querySelector("#player_score")
const computerscore = document.querySelector("#computer_score")

const playerselection = document.querySelector('#playerselection')
const result = document.querySelector('#result')


const rockbtn = document.querySelector('#rock')
const paperbtn = document.querySelector('#paper')
const scissorsbtn = document.querySelector('#scissors')

rockbtn.addEventListener('click', () => {
    playRound('Rock', getComputerChoice())
})

paperbtn.addEventListener('click', () => {
    playRound('Paper', getComputerChoice())
})

scissorsbtn.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice())
})

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * 3)]
    return computerChoice
}


function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) // my intelligent solution to pythons own .capatilize

    if (playerSelection == 'Rock') {
        playerselection.textContent = '✊'
     } if (playerSelection == 'Paper') {
        playerselection.textContent = '✋'
     } if (playerSelection == 'Scissors') {
        playerselection.textContent = '✌'
     }

    if ((playerSelection === "Rock" && computerSelection === "Scissors")
    || playerSelection === "Paper" && computerSelection === "Rock" 
    || playerSelection === "Scissors" && computerSelection === "Paper") {

         playerScore += 1;
         checkScores() 
         playerscore.textContent = 'Player Score: ' + playerScore
         result.textContent = `YOU WON ${playerSelection} BEATS ${computerSelection}`
         result.setAttribute("style", 'color:#6a994e')
         
    }

    if (computerSelection == 'Rock') {
        computerselection.textContent = '✊'
     } if (computerSelection == 'Paper') {
        computerselection.textContent = '✋'
     } if (computerSelection == 'Scissors') {
        computerselection.textContent = '✌'
     }

    if ((computerSelection === "Rock" && playerSelection === "Scissors")
    || computerSelection === "Paper" && playerSelection === "Rock" 
    || computerSelection === "Scissors" && playerSelection === "Paper") {

        computerScore += 1
        checkScores() 
        computerscore.textContent = 'Computer Score: ' + computerScore
        result.textContent = `YOU LOST ${computerSelection} BEATS ${playerSelection}`
        result.setAttribute("style", 'color:crimson')
        
    }

    if (computerSelection == playerSelection) {
        result.textContent = 'DRAW'
        result.setAttribute("style", 'color:whitesmoke')

    }

}

function checkScores() {
    if (playerScore == 5) {
        result.textContent = `YOU WON.  CHOOSE AGAIN TO RESTART`;
        result.setAttribute("style", 'color:#6a994e');
        playerScore = 0;
        computerScore = 0;
        playerscore.textContent = 'Player Score: ' + playerScore;
        computerscore.textContent = 'Computer Score: ' + computerScore;
    }
    
    if (computerScore == 5) {
        result.textContent = `YOU LOST.  CHOOSE AGAIN TO RESTART`;
        result.setAttribute("style", 'color:crimson');
        playerScore = 0;
        computerScore = 0;
        playerscore.textContent = 'Player Score: ' + playerScore;
        computerscore.textContent = 'Computer Score: ' + computerScore;
    }
}
