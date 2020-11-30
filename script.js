var currentQuestionIndex = 0
var score = 0

var questionEl = document.getElementById("question")
var answerButtons = document.getElementById("answer-buttons")
var questionContainerEl = document.getElementById("question-container")

var startButton = document.getElementById("start-btn")

const questions = [
    {
        question: "Commonly used data types DO NOT include",
        answers: [
            {text: "strings", correct: false},
            {text: "booleans", correct: false},
            {text: "alerts", correct: true},
            {text: "numbers", correct: false},
        ]
    }
]

// start button function - onclick
function startFunction() {
    questionContainerEl.classList.remove("hidden");
    startButton.classList.add("hidden");

}

startButton.addEventListener("click", startFunction)


// start button function - onclick
function displayQuestion() {
    questionEl.innerText = questions.question
}

function answerClick() {

}