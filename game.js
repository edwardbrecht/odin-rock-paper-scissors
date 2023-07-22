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

function getPlayerChoice() {
    while (true) {
        let playerChoice = +prompt("Make a selection: 1 - Rock, 2 - Paper, 3 - Scissors:", '')
        if (playerChoice >= 1 && playerChoice <=3) return getShape(playerChoice);
    }
}

function game() {
    let wins = 0;
    let losses = 0;
    let ties = 0;

    for (let round = 1; round <= 5; round++) {
        alert(`It's round ${round}!`)
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let outcome = eval(playerChoice, computerChoice);
        switch (outcome) {
            case Outcome.PlayerWins:
                wins++;
                alert(`${outcome} ${playerChoice} beats ${computerChoice}.`);
                break;
            case Outcome.ComputerWins:
                losses++;
                alert(`${outcome} ${computerChoice} beats ${playerChoice}.`);
                break;
            case Outcome.Tie:
                ties++;
                alert(`${outcome}`);
                break;
            default:
                console.error(`Unexpected outcome in game. outcome = ${outcome}`);
        }
    }
    alert(`Game over!
    Wins: ${wins}
    Losses: ${losses}
    Ties: ${ties}`)
}

game();