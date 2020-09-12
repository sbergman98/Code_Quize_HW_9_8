
//elements

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const opening = document.getElementById("opening");
const counter = document.getElementById("counter");

let question = document.getElementById("question");
let answer1 = document.getElementById("1");
let answer2 = document.getElementById("2");
let answer3 = document.getElementById("3");
let answer4 = document.getElementById("4");


let currentNumber = 0;


//Questions for Quiz

let questions = [
    {
        question: "What does HTML stand for?",
        correctAnswer: "Hypertext Markup Language",
        bogusAnswers: [
            "Hyper Text Made Up Language",
            "Hyperion Texas Markup Language",
            "Hyper Text Markup Latitude",
            
        ] 
    },
    {
        question: "What does CSS stand for?",
        correctAnswer: "Cascading Style Sheets",
        bogusAnswers: [
            "Cascading Social Sheets", 
            "Computer Style Sheets",
            "Connecticut Style Sheets",
        ] 
    },
    {
        question: "A For Loop is made up of what parts?",
        correctAnswer: "Variable declartion, Loop conditon and Iteration",
        bogusAnswers: [   
            "Vulnerable declartion, Loop conditon and Irritation",
            "Vulcan declartion, Loop conditon and Irrelevancen",
            "Variable declartion, Lois conditon and Iteration",
        ] 
    },
    {
        question: "What tells JavaScript that the variable is over?",
        correctAnswer: "The terminator",
        bogusAnswers: [         
            "The commando",
            "The predator",
            "The kindergarten cop",
        ] 
    }


];

let score = 0;

//user clicks button to start quiz
start.addEventListener("click", startQuiz);

function startQuiz(){
    start.style.display = "none";
    opening.style.display ="none";
    quiz.style.display = "block";
    renderQuestion(currentNumber);
    
   
}






// render a question

function renderQuestion(curnNum) {

 
 
 
fillOutDom(curnNum);

}





function fillOutDom(currentQuestion) {
    question.textContent = questions[currentQuestion].question;
    
    answer1.textContent = questions[currentQuestion].bogusAnswers[0];
    answer2.textContent = questions[currentQuestion].bogusAnswers[1];
    answer3.textContent = questions[currentQuestion].bogusAnswers[2];
    answer4.textContent = questions[currentQuestion].correctAnswer;
}
//fillOutDom();
document.addEventListener("click", function(event) {
    if (event.target.matches(".choice")) {
        if (event.target.textContent === questions[currentNumber].correctAnswer) {
            alert("Right Anwser")
            currentNumber++

            $("#question").text(questions[currentNumber].question);

            $("#1").text(questions[currentNumber].bogusAnswers[0]);
            $("#2").text(questions[currentNumber].bogusAnswers[1]);
            $("#3").text(questions[currentNumber].bogusAnswers[2]);
            $("#4").text(questions[currentNumber].correctAnswer);
        } 
        
        else {
        }
        
       // fillOutDom();
    }
})





// Show total at end

