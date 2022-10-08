// Requred dependencies
var read = require('readline-sync');
var score = 0;
var wrongAns = 0;
var correctAns = 0;

// Current player Data
var currentUser = {
  userName: "AnonymousPlayer",
  // score: 0, 
};

// Data of high score
var highScores = [
  { name: "1. HarryStyle", score: 6, },
  { name: "2. Harikesh Patel", score: 5, },
];

// Data for GamePlay
// Options
const q1 = `a) Allahabad
b) Jaunpur
c) Udaypur\n\n`
const q2 = `a) Hrithik Roshan
b) Iron Man
c) Elon Musk\n\n`
const q3 = `a) Wipro
b) TCS
c) Google\n\n`
const q4 = `a) Pink
b) Green
c) Neon\n\n`
const q5 = `a) Ramesh
b) Rakesh
c) Harikesh\n\n`
const q6 = `a) 24
b) 25
c) 23\n\n`

var QAlist = [
  { question: "1. Where do I live? \n\n" + q1, answer: "b" },
  { question: "2. My favorite superhero would be? \n\n" + q2, answer: "c" },
  { question: "3. Where do I work? \n\n" + q3, answer: "b" },
  { question: "4. What is my favourite colour? \n\n" + q4, answer: "b" },
  { question: "5. What is my name? \n\n" + q5, answer: "c" },
  { question: "6. What is my favorite number? \n\n" + q6, answer: "a" }
];

// Titlize user name
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

// Intro function
function welcome() {
  var user = read.question("Hi there! Please enter your name : ");
  var input = read.question('\nWould you like to play a game called "do you know ME" (Y/N) : ');

  if (user !== "") {
    currentUser.userName = user;
  }
  currentUser.userName = titleCase(currentUser.userName);
  if (input.toUpperCase() === "YES" || input.toUpperCase() === "Y") {
    console.log("\nEnter 'a' or 'b' or 'c' or 'd' as your answer accordingly..");
    console.log("\nHurrah!! here we go " + currentUser.userName + "....\n\n")
  } else {
    console.log("\nLets play only once " + currentUser.userName + ".")
    console.log("Enter 'a' or 'b' or 'c' or 'd' as your answer accordingly..");
    console.log("\nHere we go " + currentUser.userName + "....\n\n")
  }
};

// play function
function play(question, answer) {

  var userAnswer = read.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("\nGood Job!");
    correctAns = correctAns + 1;
    score = score + 1;
  } else if (userAnswer === "") {
    console.log("\nNo Selection!");
  } else {
    console.log("\nNice Try!");
    wrongAns = wrongAns + 1;
  }
  console.log("\nWrong Answers : ", wrongAns);
  console.log("Correct Answers : ", correctAns);
  console.log("Current Score : ", score);
  console.log("---------------------\n\n")
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
  console.log("Wow! " + currentUser.userName + " you have SCORED to", score,"/",6);
  console.log("\nPlease check out the high scores below. If you should be there mail me (harikeshpatel24@gmail.com) your high score screenshot, I'll update it and let you know.\n");

  highScores.map(score => console.log(score.name, " : ", score.score))
  console.log("\n");
}


welcome();
gamePlay();
showScores();
