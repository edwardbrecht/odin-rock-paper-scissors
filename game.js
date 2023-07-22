const Hand = {
    Rock: Symbol("rock"),
    Paper: Symbol("paper"),
    Scissors: Symbol("scissors")
}

const Outcome = {
    PlayerWins: Symbol("playerWins"),
    ComputerWins: Symbol("computerWins"),
    Tie: Symbol("tie")
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