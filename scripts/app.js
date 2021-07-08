let humanScore = 0;
let machineScore = 0;
const humanScore_span = document.getElementById("human-score");
const machineScore_span = document.getElementById("machine-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");


function getMachineChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(humanChoice, machineChoice) {
    humanScore++;
    humanScore_span.innerHTML = humanScore;
    machineScore_span.innerHTML = machineScore;
    result_p.innerHTML = `${humanChoice} beats ${machineChoice}. You win!`;
}

function lose(humanChoice, machineChoice) {
    machineScore++;
    humanScore_span.innerHTML = humanScore;
    machineScore_span.innerHTML = machineScore;
    result_p.innerHTML = `${humanChoice} loses to ${machineChoice}.You lose!`;
}

function draw(humanChoice, machineChoice) {
    result_p.innerHTML = `${humanChoice} equals ${machineChoice}.It\'s a draw!`;
}

function game(humanChoice) {
    const machineChoice = getMachineChoice();
    switch(humanChoice + machineChoice) {
        case"RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(humanChoice, machineChoice);
            break;
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            lose(humanChoice, machineChoice);
            break;
        default:
            draw(humanChoice, machineChoice);

    }
}

function main() {
    rock_div.addEventListener("click", function() {
        game("Rock")
    })

    paper_div.addEventListener("click", function() {
        game("Paper")
    })

    scissors_div.addEventListener("click", function() {
        game("Scissors")
})
}

main();