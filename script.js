"use strict";
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
  console.log(
    `You have chosen ${input.charAt(0).toLocaleUpperCase() + input.slice(1)}!`
  );
}

userInput();
