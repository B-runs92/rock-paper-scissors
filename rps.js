const choices = ['rock', 'paper', 'scissor']
const playerOption = document.getElementById("playerOption");
const computerOption = document.getElementById("computerOption");
const resultsDisplay = document.getElementById("resultsDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");


let scores = {
    humanScore: 0,
    computerScore: 0
}

function playRound(humanChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result = '';

    if (humanChoice === computerChoice){
        result =  "It's a tie"
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')){
            scores.humanScore ++
            result = "You win!"
        } else {
            scores.computerScore ++
            result = "You lose!";
        }
    
        playerOption.textContent = `Player: ${humanChoice}`;
        computerOption.textContent = `Computer: ${computerChoice}`;
        resultsDisplay.textContent = result;
        playerScoreDisplay.textContent = scores.humanScore;
        computerScoreDisplay.textContent = scores.computerScore;
    
        determineWinner(scores.humanScore, scores.computerScore);
        
    }

        


function determineWinner(humanScore, computerScore){
    if(humanScore === 5){
        alert("Congratulations You win!")
        resetGame();
    }else if(computerScore === 5){
        alert("Better luck next time!")
        resetGame();
    }
}

function resetGame(){
    scores.humanScore = 0;
    scores.computerScore = 0;
    playerOption.textContent = "Player:";
    computerOption.textContent = "Computer:";
    resultsDisplay.textContent = "";

}