let humanScore = 0;
let machineScore = 0;
const humanScore_span = document.getElementById("human-score");
const machineScore_span = document.getElementById("machine-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const message_p =  document.querySelector(".message > p")



function getMachineChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function win(humanChoice, machineChoice) {
    const humanChoice_div = document.getElementById(humanChoice);
    humanScore++;
    humanScore_span.innerHTML = humanScore;
    machineScore_span.innerHTML = machineScore;
    humanChoice_div.classList.add("green-glow");
    setTimeout(() => humanChoice_div.classList.remove("green-glow"),500);
    if (humanScore > 10 || machineScore >= 10) { 
        result_p.innerHTML = "Game over... Press the restart button.";  
    } else if(humanScore === 10 && machineScore < 10) { 
        result_p.innerHTML = "You have won the game!...Congratulalions!!!";
        // endGame();
    } else{
        result_p.innerHTML = `${humanChoice} beats ${machineChoice}.You have won the round!`;
    };
}

function lose(humanChoice, machineChoice) {
    const humanChoice_div = document.getElementById(humanChoice);
    machineScore++;
    humanScore_span.innerHTML = humanScore;
    machineScore_span.innerHTML = machineScore;
    humanChoice_div.classList.add("red-glow");
    setTimeout(() => humanChoice_div.classList.remove("red-glow"),500);
    if (machineScore > 10 || humanScore >= 10) { 
        result_p.innerHTML = "Game over... Press the restart button."; 
    } else if(machineScore === 10 && humanScore < 10) { 
        result_p.innerHTML = "You have lost the game!...Better luck next time!";
        // endGame();
    } else{
        result_p.innerHTML = `${humanChoice} losses to ${machineChoice}.You have lost the round!`;
    };
}

function draw(humanChoice, machineChoice) {
    const humanChoice_div = document.getElementById(humanChoice);
    humanChoice_div.classList.add("gray-glow");
    humanScore_span.innerHTML = humanScore;
    machineScore_span.innerHTML = machineScore;
    setTimeout(() => humanChoice_div.classList.remove("gray-glow"),500);
    if(humanScore >= 10 || machineScore >= 10) { 
        result_p.innerHTML = "Game over... Press the restart button."; 
    } else{
        result_p.innerHTML = `${humanChoice} equals ${machineChoice}.It\'s a draw!`; 
    }
}     

function game(humanChoice) {
    const machineChoice = getMachineChoice();
    switch(humanChoice + machineChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(humanChoice, machineChoice);
            break;
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            lose(humanChoice, machineChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(humanChoice, machineChoice);
            break;
    }
}

// function endGame() {
//     rock_div.removeEventListener("click",() => game("Rock")
//     )
//     paper_div.removeEventListener("click",() => game("Paper")
//     )
//     scissors_div.removeEventListener("click",() => game("Scissors")
//     )
// }

function restartGame() {
    result_p.innerHTML = "Ready for more?"
    humanScore_span.innerHTML = humanScore;
    machineScore_span.innerHTML = machineScore;
    humanScore = 0;
    machineScore = 0;
    humanScore_span.innerHTML = humanScore;
    machineScore_span.innerHTML = machineScore;
    rock_div.disabled = false;
    paper_div.disabled = false;
    scissors_div.disabled = false;
}
  
function main() {
    rock_div.addEventListener("click",() => game("Rock")
    )
    paper_div.addEventListener("click",() => game("Paper")
    )
    scissors_div.addEventListener("click",() => game("Scissors")
    )
}

main();

