// Create array with "rock", "paper", "scissors"
// Get random number between 0 and 2
// Return array[randomNumber]

function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3)
    return options[randomNumber]
}

// Prompt for choice between "rock", "paper" or "scissors"
// return entered string

function getHumanChoice(){
    let choice = prompt("Write \"rock\", \"paper\" or \"scissors\":")
    return choice.toLowerCase()
}

let humanScore = 0
let computerScore = 0

// Play a round
// Begin round
// Get human and computer choice
// Compare choices and return if round is won or lost
// Increment winner's score

function playRound(){
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice()
    if (humanChoice === "rock"){
        if (computerChoice == "paper"){
            console.log("You lose! Paper beats Rock.")
            computerScore++
        } else if (computerChoice == "scissors"){
            console.log("You win! Rock beats Scissors.")
            humanScore++
        } else if (computerChoice == "rock"){
            console.log("It's a tie! Both chose Rock!")
        }
    } else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            console.log("You win! Paper beats Rock.")
            humanScore++
        } else if (computerChoice == "paper"){
            console.log("It's a tie! Both chose Paper.")
        } else if (computerChoice == "scissors"){
            console.log("You lose! Scissors beats Paper.")
            computerScore++
        }
    } else if (humanChoice == "scissors"){
        if (computerChoice == "rock"){
            console.log("You lose! Rock beats Scissors.")
            computerScore++
        } else if (computerChoice == "paper"){
            console.log("You win! Scissors beats Paper.")
            humanScore++
        } else if (computerChoice == "scissors"){
            console.log("It's a tie! Both chose Scissors.")
        }
    }
}

// Create playGame function
// Play 5 rounds
// Declare a winner at the end

function playGame(){
    for (i = 0; i < 5; i++){
        playRound()
    }
    if (humanScore > computerScore){
        console.log("Congratulations, you win!")
    } else if (humanScore < computerScore){
        console.log("You lose!")
    } else {
        console.log("It's a tie!")
    }
    console.log(`Score is:\nYou: ${humanScore}\nCPU: ${computerScore}`)
    humanScore = 0
    computerScore = 0
}
    