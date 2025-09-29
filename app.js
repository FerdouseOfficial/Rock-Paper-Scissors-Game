// at first we will track the scroe of You and Comp

// we will setScore 2 var to store score of user and computer

// Modular Programming :- it means prottkta alada kazer jonno alada alada kore akti function make kora. akti function ar kaz holo matro akbari kaz kora. I think you undrestand it okay

// atakei bole moduler way of programming

let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll("button");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
};

const playGame = (UserChoices) => {
  console.log(`User Choice = ${UserChoices}`);
  // Generate Computer Choice ->
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const UserChoices = choice.getAttribute("class");
    console.log("choices was clicked", UserChoices);
    playGame(UserChoices);
  });
});
