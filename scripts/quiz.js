const quizForm = document.querySelector("#quiz-form");
const submitAnswersButton = document.querySelector("#submit-answers-button");
const output = document.querySelector("#output");

const correctAnswers= [
    "90°", "60°,60°,60°", "90°,45°,45°", "40°,40°,100°", "70°,50°,60°"
];

submitAnswersButton.addEventListener("click", function calculateScores(){
    const formResults = new FormData(quizForm);
    const formResultValues = formResults.values();
    var score = 0;
    var index = 0;
    for(let value of formResultValues){
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    output.innerText = "Your score is " + score + ".";
});