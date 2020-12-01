
var questionEl = document.getElementById("question")
var answerButtons = document.getElementById("answer-buttons")
var questionContainerEl = document.getElementById("question-container")
var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var answer1 = document.getElementById("ans-1");
var answer2 = document.getElementById("ans-2");
var answer3 = document.getElementById("ans-3");
var answer4 = document.getElementById("ans-4");
var currentQuestionIndex = 0
var score = 0
let questionsText = ["Commonly used data types DO NOT include '_____'", "The conditon in an if/else statement is enclosed within '_____'", "Arrays in JavaScript can be used to store '_____'", "String values must be enclosed within '_____' when being assigned to variables", "A very useful tool used during development and debugging for printing content to the debugger is '_____'"]
let answers1Text = ["strings", "booleans", "alerts", "numbers"]
let answers2Text = ["quotes", "curly brackets", "parentheses", "square brackets"]
let answers3Text = ["Numbers and strings", "Other arrays", "Booleans", "All of the above"]
let answers4Text = ["commas", "curly brackets", "quotes", "parentheses"]
let answers5Text = ["JavaScript", "terminal/bash", "for loop", "consoleLog"]

// start button function - onclick
function startFunction() {
    questionContainerEl.classList.remove("hidden");
    startButton.classList.add("hidden");
    questionEl.innerText = questionsText[0]
    answer1.innerText = answers1Text[0]
    answer2.innerText = answers1Text[1]
    answer3.innerText = answers1Text[2]
    answer4.innerText = answers1Text[3]

}  

startButton.addEventListener("click", startFunction)


// next button function
function nextFunction() {
    
}

nextButton.addEventListener("click", nextFunction)

// answer click function
function answerClick() {

}




/* score to local storage fucntion
if(add variables declaring all questions have been asked) {
localStorage.setItem('recentScore', score)

return window.location.assign('/end.html') */
