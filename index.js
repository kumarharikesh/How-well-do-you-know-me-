// Requred dependencies
var read = require('readline-sync');
var score = 0;

// Current player Data
var currentUser = { 
  userName: "AnonymousPlayer",
  // score: 0, 
};

// Data of high score
var highScores = [
  { name: "HarryStyle",score: 6, },
  { name: "Harikesh Patel",score: 5, },
];

// Data for GamePlay
// Options
const q1 = `a) Allahabad
b) Jaunpur
c) Udaypur\n\n`
const q2 = `a) Allahabad
b) Jaunpur
c) Udaypur\n\n`
const q3 = `a) Wipro
b) TCS
c) Google\n\n`
const q4 = `a) Allahabad
b) Jaunpur
c) Udaypur\n\n`
const q5 = `a) Allahabad
b) Jaunpur
c) Udaypur\n\n`
const q6 = `a) 24
b) 25
c) 23\n\n`

var QAlist = [
  { question: "1. Where do I live? \n\n"+q1, answer: "b" }, 
  { question: "2. My favorite superhero would be? \n\n"+q2, answer: "a" },
  { question: "3. Where do I work? \n\n"+q3, answer: "b" },
  { question: "4. What is my favourite colour? \n\n"+q4, answer:"c"},
  { question: "5. What is my favorite food? \n\n"+q5, answer:"b"},
  { question: "6. What is my favorite number? \n\n"+q6, answer:"c"}
];

// play function
function welcome() {
  var user = read.question("Hi there! Please enter your name : ");
  var input = read.question('\nWould you like to play a game called "do you know ME" : ').toLowerCase();
  
  if(user!==""){
    currentUser.userName=user;
  }
  if(input==="yes" || input === "y"){
    console.log("\nHurrah!! here we go....\n\n")
  }else{
    console.log("\nLets play only once...\n\n")
  }
};

// play function
function play(question, answer) {
  
  var userAnswer = read.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("\nRight!");
    score = score + 1; 
  } else {
    console.log("\nWrong!");
  }

  console.log("Current score : ", score);
  console.log("--------------\n\n")
}

// GamePlay function
function gamePlay() {
  for (const QA of QAlist) {
    play(QA.question, QA.answer)
  }
}

// Result function
function showScores() {
  console.log("-:)  -:)   -:)    -:)     -:)      -:)        -:)\n\n");
  console.log("Wow! " + currentUser.userName + " you have SCORED to", score);
  console.log("\nPlease check out the high scores below. If you should be there mail me (harikeshpatel24@gmail.com) your high score screenshot, I'll update it and let you know.\n");

  highScores.map(score => console.log(score.name, " : ", score.score))
  console.log("\n");
}


welcome();
gamePlay();
showScores();