const Hand = {
    Rock: "Rock",
    Paper: "Paper",
    Scissors: "Scissors"
}

const Outcome = {
    PlayerWins: "You win!",
    ComputerWins: "You lose!",
    Tie: "It's a tie!"
}

let wins = 0;
let losses = 0;
let ties = 0;
let round = 1;
let gameOver = false;

document.getElementById("rock-btn").addEventListener("click", () => playRound(Hand.Rock))
document.getElementById("paper-btn").addEventListener("click", () => playRound(Hand.Paper))
document.getElementById("scissors-btn").addEventListener("click", () => playRound(Hand.Scissors))


function getRandomNum() {
    return Math.floor(Math.random() * 3) + 1;
}

function getShape(num) {
    switch (num) {
        case 1:
            return Hand.Rock;
        case 2:
            return Hand.Paper;
        case 3:
            return Hand.Scissors;
        default:
            console.warn(`Unexpected num in getShape(). Expected 1-3, got ${num}.`);
            return null;
    }
}

function getComputerChoice() {
    return getShape(getRandomNum());
}

function eval(playerChoice, computerChoice) {
    switch (playerChoice) {
        case Hand.Rock:
            switch (computerChoice) {
                case Hand.Rock:
                    return Outcome.Tie;
                case Hand.Paper:
                    return Outcome.ComputerWins;
                case Hand.Scissors:
                    return Outcome.PlayerWins;
                default:
                    console.error(`Unexpected computerChoice in eval(). computerChoice = ${computerChoice}`);
                    return null;
            }
            case Hand.Paper:
                switch (computerChoice) {
                    case Hand.Rock:
                        return Outcome.PlayerWins;
                    case Hand.Paper:
                        return Outcome.Tie;
                    case Hand.Scissors:
                        return Outcome.ComputerWins;
                    default:
                        console.error(`Unexpected computerChoice in eval(). computerChoice = ${computerChoice}`);
                        return null;
                }
            case Hand.Scissors:
                switch (computerChoice) {
                    case Hand.Rock:
                        return Outcome.ComputerWins;
                    case Hand.Paper:
                        return Outcome.PlayerWins;
                    case Hand.Scissors:
                        return Outcome.Tie;
                    default:
                        console.error(`Unexpected computerChoice in eval(). computerChoice = ${computerChoice}`);
                        return null;
                }
            default:
                console.error(`Unexpected playerChoice in eval(). playerChoice = ${playerChoice}`)
                return null;
    }
}

function playRound(playerChoice) {
    console.log(`It's round ${round}!`)
    let computerChoice = getComputerChoice();
    let outcome = eval(playerChoice, computerChoice);
    switch (outcome) {
        case Outcome.PlayerWins:
            wins++;
            console.log(`${outcome} ${playerChoice} beats ${computerChoice}.`);
            break;
        case Outcome.ComputerWins:
            losses++;
            console.log(`${outcome} ${computerChoice} beats ${playerChoice}.`);
            break;
        case Outcome.Tie:
            ties++;
            console.log(`${outcome}`);
            break;
        default:
            console.error(`Unexpected outcome in game. outcome = ${outcome}`);
        }
    round++;
}

function game() {


    alert(`Game over!
    Wins: ${wins}
    Losses: ${losses}
    Ties: ${ties}`)
}

