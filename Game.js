

let playGame = confirm("Shall We play the rock , paper or scissors");

if (playGame) {

    let playerChoice = prompt("Please enter rock , paper or scissor");
    if (playerChoice) {

        playerChoice = playerChoice.trim().toLowerCase();

        const computer = ["rock", 'paper', 'scissor'];

        let computerChoice = computer[Math.floor(Math.random() * 3)];
        alert(computerChoice);

        let result =
            playerChoice === computerChoice
                ? "tie Game"
                : playerChoice === "rock"
                    ? computerChoice === "paper"
                        ? "computer win"
                        : "you won"
                    : playerChoice === "paper"
                        ? computerChoice === "scissor"
                            ? "computer win"
                            : "you won"
                        : computerChoice === "rock"
                            ? "computer win"
                            : "you won";

        alert("your choice-> " + playerChoice + "\n" + "computer choice -> " + computerChoice + "\n" + result);

    } else {
        alert("Ok , maybe next time");
    }

} else {
    alert("Ok , maybe next time")
}