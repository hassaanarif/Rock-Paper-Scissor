const initial_Value = 0;
const initial_Statement = "Make your Move";

let user_Score = 0;
let computer_Score = 0;

// Caching the DOM
// statement = result

let userScore_span = document.getElementById("userScore");
let computerScore_span = document.getElementById("computerScore");
let scoreBoard_div = document.getElementById("scoreBoard");
let statement_div = document.getElementById("statement");
let rock_element = document.getElementById("rock");
let paper_element = document.getElementById("paper");
let scissor_element = document.getElementById("scissor");
let resetButton_div = document.getElementById("resetButton");

function getComputerChoice() {
  let choices = ["rock", "paper", "scissor"];
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function win() {
  user_Score++;
  userScore_span.innerHTML = user_Score;
  statement_div.innerHTML = "User Wins";
}

function lose() {
  computer_Score++;
  computerScore_span.innerHTML = computer_Score;
  statement_div.innerHTML = "Computer Wins";
}

function draw() {
  statement_div.innerHTML = "it's a Draw...";
}

function reset() {
  statement_div.innerHTML = initial_Statement;
  userScore_span.innerHTML = initial_Value;
  computerScore_span.innerHTML = initial_Value;
}

function Game(userChoice) {
  let computerChoice = getComputerChoice();

  switch (userChoice + " " + computerChoice) {
    case "rock scissor":
    case "paper rock":
    case "scissor paper":
      win();
      break;

    case "rock paper":
    case "paper scissor":
    case "scissor rock":
      lose();
      break;

    case "rock rock":
    case "paper paper":
    case "scissor scissor":
      draw();
      break;
  }
}

function main() {
  rock_element.addEventListener("click", function () {
    Game("rock");
  });

  paper_element.addEventListener("click", function () {
    Game("paper");
  });

  scissor_element.addEventListener("click", function () {
    Game("scissor");
  });

  resetButton_div.addEventListener("click", function () {
    reset();
  });
}

main();
