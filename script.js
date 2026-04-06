const params = new URLSearchParams(window.location.search);
const chapter = params.get("chapter");

document.getElementById("chapterTitle").innerText =
chapter.toUpperCase() + " MOCK TEST";
let userAnswers = [];
let questions = [];
let qIndex = 0;
let score = 0;
let wrongQuestions = [];
let time = 4500;

fetch(`data/${chapter}.json`)
.then(res => res.json())
.then(data => {
questions = data;
showQuestion();
});

function showQuestion(){
let q = questions[qIndex];

document.getElementById("question").innerText =
(qIndex+1) + ". " + q.question;

let optionsHTML = "";

for(let key in q.options){
optionsHTML +=
`<button  onclick="checkAnswer('${key}')">${key}. ${q.options[key]}</button>`;

}

document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(ans){

userAnswers.push(ans);

if(ans === questions[qIndex].answer){
score++;
}else{
wrongQuestions.push(qIndex+1);
}

//nextQuestion();
}



function nextQuestion(){
qIndex++;

if(qIndex < questions.length){
showQuestion();
}else{
showResult();
}
}

function showResult(){
document.getElementById("quizBox").style.display = "none";
document.getElementById("resultBox").style.display = "block";

document.getElementById("score").innerText =
"Score: " + score + " / " + questions.length;

document.getElementById("wrong").innerText =
"Wrong Question Numbers: " + wrongQuestions.join(", ");
}

setInterval(()=>{
time--;
document.getElementById("timer").innerText = "Time: " + time;

if(time === 0){
showResult();
}
},1000);

function viewAnswers(){

let html = "<h3>Answer Review</h3>";

for(let i = 0; i < questions.length; i++){

html += `<p><b>Q${i+1}:</b> ${questions[i].question}</p>`;

let options = questions[i].options;
let correct = questions[i].answer;
let user = userAnswers[i];

for(let key in options){

// correct option green
if(key == correct){
html += `<p style="color:green"><b>${key}.</b> ${options[key]}</p>`;
}

// wrong selected option red
else if(key == user){
html += `<p style="color:red"><b>${key}.</b> ${options[key]}</p>`;
}

// normal options
else{
html += `<p>${key}. ${options[key]}</p>`;
}

}

html += `
<p><b>Your Answer:</b> ${user ? user : "Not Attempted"}</p>
<p><b>Correct Answer:</b> ${correct}</p>
<hr>
`;

}

document.getElementById("answerReview").innerHTML = html;
}

function updateTimer(){

let hours = Math.floor(time / 3600);
let minutes = Math.floor((time % 3600) / 60);
let seconds = time % 60;

document.getElementById("timer").innerText =
"Time Left: " +
hours + ":" +
(minutes < 10 ? "0" : "") + minutes + ":" +
(seconds < 10 ? "0" : "") + seconds;

time--;

if(time < 0){
showResult();
}

}

updateTimer();
setInterval(updateTimer,1000);
