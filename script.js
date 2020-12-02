
var questionEl = document.getElementById("question")
var answerButtons = document.getElementById("answer-buttons")
var answerClickedV;
var questionsGrid = document.getElementById("questions-grid")
var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var answer1 = document.getElementById("ans-1");
var answer2 = document.getElementById("ans-2");
var answer3 = document.getElementById("ans-3");
var answer4 = document.getElementById("ans-4");
var currentQuestionIndex = 0;
var clickCounter = 0;
let maxCounter = 5;
var score = 0;
let questionsText = ["Commonly used data types DO NOT include '_____'", "The conditon in an if/else statement is enclosed within '_____'", "Arrays in JavaScript can be used to store '_____'", "String values must be enclosed within '_____' when being assigned to variables", "A very useful tool used during development and debugging for printing content to the debugger is '_____'"];
let answers1Text = ["Strings", "Booleans", "Alerts", "Numbers"];
let answers2Text = ["Quotes", "Curly brackets", "Parentheses", "Square Brackets"];
let answers3Text = ["Numbers and strings", "Other arrays", "Booleans", "All of the above"];
let answers4Text = ["Commas", "Curly brackets", "Quotes", "Parentheses"];
let answers5Text = ["JavaScript", "Terminal/Bash", "For Loop", "Console Log"];

// start button function 
function startFunction() {

    questionsGrid.classList.remove("hidden");
    startButton.classList.add("hidden");
    questionEl.innerText = questionsText[0]
    answer1.innerText = answers1Text[0]
    answer2.innerText = answers1Text[1]
    answer3.innerText = answers1Text[2]
    answer4.innerText = answers1Text[3]
}
    startButton.addEventListener("click", startFunction)

function setAnswer(event) {
 if (event.target.id === "ans-1") {
   answerClickedV = answer1
 } else if (event.target.id === "ans-2") {
  answerClickedV = answer2
} else if (event.target.id === "ans-3") {
  console.log(answer3)
  answerClickedV = answer3
  console.log(answerClickedV)
} else if (event.target.id === "ans-4") {
  answerClickedV = answer4
}
}
//set answer click function (ADD TIMER PENALTY HERE) 
function answerClicked() {
  if (
        (currentQuestionIndex === 0 &&
        answerClickedV === answer3) ||
        (currentQuestionIndex === 1 &&
        answerClickedV === answer3) ||
        (currentQuestionIndex === 2 &&
        answerClickedV === answer4) ||
        (currentQuestionIndex === 3 &&
        answerClickedV === answer3) ||
        (currentQuestionIndex === 4 &&
        answerClickedV === answer4) 
        ) {
          
        score++
        console.log(score)
        alert("winner")
        nextFunction()
      //else... timer deduction 
    } else {
        nextFunction()
      }

    }

// next button function - display next set of Q&A
function nextFunction() {

    currentQuestionIndex++;

    if(currentQuestionIndex === 1){
        questionEl.innerText = questionsText[1]
        answer1.innerText = answers2Text[0]
        answer2.innerText = answers2Text[1]
        answer3.innerText = answers2Text[2]
        answer4.innerText = answers2Text[3] 
    } else if (currentQuestionIndex === 2){
        questionEl.innerText = questionsText[2]
        answer1.innerText = answers3Text[0]
        answer2.innerText = answers3Text[1]
        answer3.innerText = answers3Text[2]
        answer4.innerText = answers3Text[3] 
    } else if (currentQuestionIndex === 3){
        questionEl.innerText = questionsText[3]
        answer1.innerText = answers4Text[0]
        answer2.innerText = answers4Text[1]
        answer3.innerText = answers4Text[2]
        answer4.innerText = answers4Text[3] 
    } else { 
        questionEl.innerText = questionsText[4]
        answer1.innerText = answers5Text[0]
        answer2.innerText = answers5Text[1]
        answer3.innerText = answers5Text[2]
        answer4.innerText = answers5Text[3] 
}
//answerClicked(event)
}
nextButton.addEventListener("click", answerClicked) 
answerButtons.addEventListener("click", setAnswer)

/* score to local storage function
if(add variables declaring all questions have been asked) {
localStorage.setItem('recentScore', score)

return window.location.assign('/end.html')
 */
