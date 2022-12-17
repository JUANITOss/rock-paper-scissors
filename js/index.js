const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

function getComputerChoice() {
    
    let choices = ["rock","paper","scissors"];

    let index = Math.floor(Math.random() * choices.length);
    
    return choices[index];
}

function playRound (compChoice, playChoice) {
    
    if (compChoice === playChoice) {
        return "Draw";    
    }

    if (playChoice === "rock") {

        if (compChoice === "scissors") {
            return "Player Wins, rock beats scissors.";
        }

        return "Computer Wins, paper beats rock.";
    }

    if (playChoice === "scissors") {

        if (compChoice === "paper") {
            return "Player Wins, scissors beats paper.";
        }

        return "Computer Wins, rock beats scissors.";
    }

    if (playChoice === "paper") {

        if (compChoice === "rock") {
            return "Player Wins, paper beats rock.";
        }

        return "Computer Wins, scissors beats paper";
    }

}