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
const userChoice = userInput();

//taking computer's input
function opponentChoice() {
  const options = ["Rock", "Paper", "Scissor"];
  const choice = Math.floor(Math.random() * options.length);
  return options[choice];
}

const robotChoice = opponentChoice();

//userChoice and robotChoice is found
alert(`You chose ${userChoice}!`);
alert(`Your opponent chose ${robotChoice}!`);

function checkWinner() {
  if (userChoice == `Rock` && robotChoice == `Scissor`) {
    alert(`That Rock absolutely demolished the Scissor! YOU WON THE GAME!!!`);
  } else if (userChoice == `Paper` && robotChoice == `Rock`) {
    alert(`Rock is no match for Paper! YOU WON THE GAME!!!`);
  } else if (userChoice == `Scissor` && robotChoice == `Paper`) {
    alert(`That Scissor just slashed the Paper into half! YOU WON THE GAME! `);
  } else if (userChoice == robotChoice) {
    alert(`You both chose the same, what a coincidence!`);
  } else {
    alert(`Your opponent overpowered you massively! Better luck next time!`);
  }
}

checkWinner();
