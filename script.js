// Create array with "rock", "paper", "scissors"
// Get random number between 0 and 2
// Return array[randomNumber]

function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3)
    return options[randomNumber]
}