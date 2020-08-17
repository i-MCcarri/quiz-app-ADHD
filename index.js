// jQuery quiz-app
import { popQuiz } from "store.js";

//global variables
const score = 0;
const wrongScore = 0;
const qNum = 0;
const name = '';

function generateQView(){
  let question = store.popQuiz[store.currentQuestion];
if (store.popQuiz.view === 'multiple-choice') {
  return `<div class="slides">
  <div class="question">${popQuiz.question}</div><br><br>
  <form class="question-form">
  <input type="radio" id="multiple-choice" names="answers" value="${popQuiz.answers[0]}">
  <label for="popQuiz.answers[0]">${popQuiz.answers[0]}</label><br>
  <input type="radio" id="multiple-choice" names="answers" value="${popQuiz.answers[1]}">
  <label for="popQuiz.answers[1]">${popQuiz.answers[1]}</label><br>
  <input type="radio" id="multiple-choice" names="answers" value="${popQuiz.answers[2]}">
  <label for="popQuiz.answers[2]">${popQuiz.answers[2]}</label><br>
  <input type="radio" id="multiple-choice" names="answers" value="${popQuiz.answers[3]}">
  <label for="popQuiz.answers[3]">${popQuiz.answers[3]}</label><br><br>
  <button type="submit" id="verify-answer">Verifiy</button>
  <button type="submit" id="next-q">Next Question</button>
</form>
</div>`;
} else if (store.popQuiz.view === 'multiple-answer'){
return `<div class="slides">
<div class="question">${popQuiz.question}</div><br><br>
<form class="question-form">
<input type="checkbox" id="multiple-answer" names="answers" value="${popQuiz.answers[0]}">
<label for="popQuiz.answers[0]">${popQuiz.answers[0]}</label><br>
<input type="checkbox" id="multiple-answer" names="answers" value="${popQuiz.answers[1]}">
<label for="popQuiz.answers[1]">${popQuiz.answers[1]}</label><br>
<input type="checkbox" id="multiple-answer" names="answers" value="${popQuiz.answers[2]}">
<label for="popQuiz.answers[2]">${popQuiz.answers[2]}</label><br>
<input type="checkbox" id="multiple-answer" names="answers" value="${popQuiz.answers[3]}">
<label for="popQuiz.answers[3]">${popQuiz.answers[3]}</label><br><br>
<button type="submit" id="verify-answer">Verifiy</button>
<button type="submit" id="next-q">Next Question</button>
</form>
</div>`;
} else if (store.popQuiz.view === 'boolean'){
return `<div class="slides">
<div class="question">${popQuiz.question}</div><br><br>
<form class="question-form">
<input type="radio" id="boolean-true" names="answers" value="${popQuiz.answers[0]}">
<label for="popQuiz.answers[0]">${popQuiz.answers[0]}</label><br>
<input type="radio" id="boolean-false" names="answers" value="${popQuiz.answers[1]}">
<label for="popQuiz.answers[1]">${popQuiz.answers[1]}</label><br><br>
<button type="submit" id="verify-answer">Verifiy</button>
<button type="submit" id="next-q">Next Question</button>
</form>
</div>`;
} else {
  //conclusion page
  quizConclusion();
}

function generateStartPage() {
  return `<div class="startPage">
  <h2>Who is ready to begin?</h2>
  <p>Our subject is A.D.H.D.</p>
  <form id="js-quiz-app-form-name">
      <label for="name">Name:</label>
      <input type="text" name="quizTakerName" class="inputBox" placeholder="First Name" required /><br><br>
  </form>
  <form id="js-quiz-app-form-id">
      <label for="name">I.D.: </label>
      <input type="text" name="idNum" class="inputBox" placeholder="Student ID"><br><br>
  </form>
  <form class="js-quiz-app-form-bottons" id="js-quiz-app-form-bottons">
      <button class="exit-button" type="button">Exit</button>
      <button class="start-quiz-button" type="submit">Start Quiz</button>
  </form>
  <form class="js-quiz-app-form-checkbox" id="js-quiz-app-form-checkbox">
      <input type="checkbox" name="terms" required />
      <label for="terms">sign your life away. . . again.</label>
  </form>
</div>`;
}

function quizConclusion(){
  return `<div class="quiz-conclusion">
  <h2> Quiz Completed</h2>
  <p>Congratulations ${name}!</p>
  <p>Your final score was ${score} out of 100!</p>
  <p>You answered ${wrongScore} questions wrong.</p>
  <form class="js-quiz-app-form-bottons" id="js-quiz-app-form-bottons">
      <button class="exit-button" type="button">Exit</button>
      <button class="start-quiz-button" type="submit">Restart Quiz</button>
  </form>
</div>`;
}

function renderList(){
  let html = generateQView();
  console.log(html);
  $('main').html(html);
}

function main() {
  let startPage = generateStartPage();
  $('main').html(startpage);
}

function SubmitAnswer(event) {
  event.preventDefault();
  let answer = $('input[name=answers]:checked').val();
  if(store.popQuiz[store.currentQuestions].correctAnswer == answer){
    alert(`You are correct!`);
  } else {
    alert(`oOf! The correct answer is: ${store.popQuiz[currentQuestion].correctAnswer}.`)
  }
  store.currentQuestion++;
  renderList();
}

function completeItem(){
  console.log($(this).parent());
  alert('complete');
  renderList();
}

//Requirements:
//Button to start quiz
  //when startQuiz button is clicked
  //verify name was typed
  //has check box been checked
  //main()
//user cannot skip questions without answering
//answer 5+ questions of multiple choice
//display current question number and ratio to total questions
//see current test score
//what happens if the answer is correct
//what happens if the answer is wrong
//received modal feedback, show correct answer
//move to the next question on answer submit
//end page / display total score
//start new quiz

//Technical Requirements:
//Render answer choices in a <form>
//use semantic HTML along with CSS and jQuery
//be accessible as possible
//associate `label` tags with inputs
//use responsive design
//be fully useable by keyboard tab through

$('main').on('click','.start-quiz-button', function() {
  renderList();
});

$('main').on('submit', '.form', submitAnswer);

main();