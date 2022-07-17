


function getComputerChoice() {
    const computerChoice = Math.floor((Math.random() * 3) + 1) 

    switch (computerChoice) {
        case 1:
            return "rock"
            break;
        case 2:
            return "paper"
            break;
        case 3:
            return "scissors"
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection.toLowerCase()
    switch(playerSelection + computerSelection){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
        console.log(`You win, ${playerSelection} beats ${computerSelection}`)
        result = "player"
        break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`)
        result = "computer"
        break;
        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
        console.log( `It's a draw, ${playerSelection} and ${computerSelection}`)
        result = "draw"
    }
    return result
}


function game(){
    let result = null;
    let winner = null;
    let playerScore = 0;
    let computerScore = 0;
    let numberOfGames = prompt("how many games would you like to play?")
    for(let i = 1; i <= numberOfGames; i ++ ){
        const computerSelection = getComputerChoice()
        const playerSelection = prompt("enter rock, paper or scissors")
        result = playRound(playerSelection, computerSelection)
        if(result == "player"){
           playerScore += 1; 
        } 
        else if (result == "computer"){
            computerScore += 1;
        } 
    }

    if(playerScore > computerScore){
        winner = `You Won!, with a total score of ${playerScore}, the computer scored ${computerScore}`
    } 
    else if (computerScore > playerScore){
        winner = `You Lost! with a total score of ${playerScore}, the computer scored ${computerScore}`
    }
    else{
        winner = `It was a draw!, you won ${playerScore} games and the computer won ${computerScore} games`
    }

    console.log("Game Over!")
    return winner

}

