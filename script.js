"use strict";
function userInput() {
  //takes user's input
  let input = prompt(`What is your choice?`);

  //checks if the input is valid
  while (
    ["Rock", "Paper", "Scissor", "rock", "paper", "scissor"].indexOf(input) ==
    -1
  ) {
    input = prompt(
      `Wrong input. Please choose between Rock, Paper and Scissors.`
    );
  }
  console.log(input);
}

userInput();
