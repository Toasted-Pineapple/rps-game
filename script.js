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
  return `You have chosen ${
    input.charAt(0).toLocaleUpperCase() + input.slice(1)
  }!`;
}
let userChoice = userInput();
console.log(userChoice);

//taking computer's input
function opponentChoice() {
  const options = ["Rock", "Paper", "Scissor"];
  const choice = Math.floor(Math.random() * options.length);
  return options[choice];
}

const robotChoice = opponentChoice();
console.log(`Your opponent has chosen ${robotChoice}!`);

//userChoice and robotChoice is found
