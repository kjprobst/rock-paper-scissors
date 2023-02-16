const compOptions = ['rock', 'paper', 'scissors']; //three options for computer 

function getComputerChoice() {
    return compOptions[Math.floor(Math.random()*compOptions.length)]
}

let gameWins = 0

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        console.log("It's a Tie!");

    }else if (playerSelection === 'rock' && computerSelection === 'scissors' 
    || playerSelection === 'paper' && computerSelection === 'rock'
    || playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log ("You Win!!!!!");
        gameWins++;

    }else{
        console.log('You Lose!');
        gameWins--;
}
}

for (let gameCount = 0 ; gameCount < 5 ; gameCount++){
    
    let playerSelection = prompt('Choose rock, paper, or scissors').toLowerCase()
    
    let computerSelection = getComputerChoice()
    
    playRound(playerSelection, computerSelection)
}

if (gameWins < 0){
    console.log ("You lose best of 5 games")
}
else if (gameWins = 0){
    console.log("You tie best of 5 games")
}
else {
    console.log("You win best of 5 games")
}

