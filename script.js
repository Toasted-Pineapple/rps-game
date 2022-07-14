"use strict";

// taking user input
function userInput() {
  //takes user's input
  let input = prompt(`Rock, Paper, Scissor. Which one do you choose?`);

  //checks if the input is valid
  while (
    ["Rock", "Paper", "Scissor", "rock", "paper", "scissor"].indexOf(input) ==
    -1
  ) {
    input = prompt(
      `Wrong input. Please choose between Rock, Paper and Scissors.`
    );
  }
  return input.charAt(0).toLocaleUpperCase() + input.slice(1);
}

//taking computer's input
function opponentChoice() {
  const options = ["Rock", "Paper", "Scissor"];
  const choice = Math.floor(Math.random() * options.length);
  return options[choice];
}

function checkWinner() {
  let score = 0;
  let opponentScore = 0;

  for (let i = 1; i <= 3; i++) {
    const userChoice = userInput();
    const robotChoice = opponentChoice();

    //Need Attention: Need the score to remain 0 instead of going negative if the score is already 0.
    if (userChoice == `Rock` && robotChoice == `Scissor`) {
      score++;
      opponentScore--;
      alert(`You chose ${userChoice}!`);
      alert(`Your opponent chose ${robotChoice}!`);
      alert(
        `That Rock absolutely demolished the Scissor! YOU WON THE GAME!!! \n The score is now ${score}:${opponentScore}`
      );
    } else if (userChoice == `Paper` && robotChoice == `Rock`) {
      score++;
      opponentScore--;
      alert(`You chose ${userChoice}!`);
      alert(`Your opponent chose ${robotChoice}!`);
      alert(
        `Rock is no match for Paper! YOU WON THE GAME!!! \n The score is now ${score}:${opponentScore}`
      );
    } else if (userChoice == `Scissor` && robotChoice == `Paper`) {
      score++;
      opponentScore--;
      alert(`You chose ${userChoice}!`);
      alert(`Your opponent chose ${robotChoice}!`);
      alert(
        `That Scissor just slashed the Paper into half! YOU WON THE GAME! \n The score is now ${score}:${opponentScore} `
      );
    } else if (userChoice == robotChoice) {
      alert(`You chose ${userChoice}!`);
      alert(`Your opponent chose ${robotChoice}!`);
      alert(
        `You both chose the same, what a coincidence! \n The score is now ${score}:${opponentScore}`
      );
    } else {
      score--;
      opponentScore++;
      alert(`You chose ${userChoice}!`);
      alert(`Your opponent chose ${robotChoice}!`);
      alert(
        `Your opponent overpowered you massively! Better luck next time! \n The score is now ${score}:${opponentScore}`
      );
    }
  }

  if (score > opponentScore) {
    alert(`You did a great job. You absolutely demolished your opponent!`);
  } else {
    alert(`Unfortunately, you lost the game. Better luck next time!`);
  }
}
checkWinner();
