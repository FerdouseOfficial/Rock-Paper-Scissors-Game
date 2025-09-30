// at first we will track the scroe of You and Comp

// we will setScore 2 var to store score of user and computer

// Modular Programming :- it means prottkta alada kazer jonno alada alada kore akti function make kora. akti function ar kaz holo matro akbari kaz kora. I think you undrestand it okay

// atakei bole moduler way of programming

// the Math.Random() always generate number between 0 to 1;
// but if you wanna gernerate from a specif range to another range
// You have to mulitply the range number with the Math.random()
/* 
 for Example:  You wanna generate number from 0 to 3. You have to multiply it with four

 math.random() * 4 // it will generate number from 0 to 3.
*/

let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll("button");

const genCompChoice = () => {
  // Generating Computer Choice
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  console.log("Game was draw");
  winner.innerText = "Its a Draw. Play again.";
  winner.style.backgroundColor = "#2d392d";
};

let winner = document.querySelector(".msg");
const showWinner = (userWin) => {
  if (userWin) {
    winner.innerText = "You Win";
    winner.style.backgroundColor = "#17b017ff";
    console.log("You win");
  } else {
    console.log("You lose");
    winner.style.backgroundColor = "#e01b3fff";
    winner.innerText = "You lose";
  }
};

const playGame = (UserChoices) => {
  console.log(`User Choice = ${UserChoices}`);
  // Generate Computer Choice ->
  const compChoice = genCompChoice();
  console.log(`Computer Choice = ${compChoice}`);
  if (UserChoices === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (UserChoices === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (UserChoices === "paper") {
      //scissors, rock
      userWin = compChoice === "rock" ? true : false;
    } else if (UserChoices === "scissors") {
      // rock, paper
      userWin = compChoice === "rock" ? true : false;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const UserChoices = choice.getAttribute("class");
    // console.log("choices was clicked", UserChoices);
    playGame(UserChoices);
  });
});
