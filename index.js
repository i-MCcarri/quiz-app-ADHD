import $ from jQuery;
import store from './store.js';

// jQuery quiz-app
const store.popQuiz = require("./store.js");


//global variables
const score = 0;
const wrongScore = 0;
const qNum = 0;
const name = '';

$('.validate')on('click', scoreEachQuizAnswer())
if (selected === correctAnswer) {
  let verified = null;
  verified = true;
  score += 10;
  <script>
$(message() {
  $('#resultMessage').dialog({
    autoOpen: false;
  });
  $('#verifyMessage').on('click',() {
    $('#resultMessage').dialog('open');
  });
});
</script>

<div class='resultMessage' id='resultMessage'> 
<title>Verified</title>
<p>The correct answer was:</p>
  <ul>
    <li>{store.popQuiz.correctAnswer[idx]}</li>
  </ul>
  <span> ${score} out of 10 points!</span>
</div>

return verified, `</script>

<div class='resultMessage' id='resultMessage'> 
<title>Verified</title>
<p>The correct answer was:</p>
  <ul>
    <li>{store.popQuiz.correctAnswer[idx]}</li>
  </ul>
  <span> ${score} out of 10 points!</span>
</div>`;

} else {
  wrongScore -= 10;
  verified = false;
 <script>
  $(message() {
    $('#resultMessage').dialog({
      autoOpen: false;
    });
    $('#verifyMessage').on('click',() {
      $('#resultMessage').dialog('open');
    });
  });
</script>

  return verified, `<div class='resultMessage' id='resultMessage'> 
    <title>Try Again...</title>
    <p>The correct answer was:</p>
      <ul>
        <li>${store.popQuiz.correctAnswer[idx]}</li>
      </ul>
    <span> 0 out of 10 points...</span>
  </div>`;
};

indexAnswers(popQuiz){
  for (let i=0; popQuiz.length; i++){
    var idx = i;
  }
  return idx;
}

$('.slides')on('click', generateQView(popQuiz) {
  store.popQuiz.map(i)
} )
 
jQuery.map(popQuiz, generateQView() {
  
});

function generateQView(){
  let question = store.popQuiz[currentQuestion];
if (store.store.popQuiz.view === 'multiple-choice') {
  return `<div class='slides'>
  <form id='quizApp'>
      <fieldset>
          <legend class="question">{questions}</legend>
          <div>
              <input 
                  type='radio'
                  name='multipoleChoice'
                  id={store.popQuiz.answer}
                  class='answer__option'
                  check ={selection} === store.popQuiz[i]correctAnswer} />
              <label htmlFor={store.popQuiz.answer} class='answer__label'>
                      {store.popQuiz.answer[0]} 
              </label><br>
              <input 
                  type='radio'
                  name='multipoleChoice'
                  id={store.popQuiz.answer}
                  class='answer__option'
                  check ={selection} === store.popQuiz[i]correctAnswer} />
              <label htmlFor={store.popQuiz.answer} class='answer__label'>
                  {store.popQuiz.answer[1]} 
              </label><br>
              <input 
                  type='radio'
                  name='multipoleChoice'
                  id={store.popQuiz.answer}
                  class='answer__option'
                  check ={selection} === store.popQuiz[i]correctAnswer} />
              <label htmlFor={store.popQuiz.answer} class='answer__label'>
                  {store.popQuiz.answer[2]} 
              </label><br>
              <input 
                  type='radio'
                  name='multipoleChoice'
                  id={store.popQuiz.answer}
                  class='answer__option'
                  check ={selection} === store.popQuiz[i]correctAnswer} />
              <label htmlFor={store.popQuiz.answer} class='answer__label'>
                  {store.popQuiz.answer[3]} 
              </label><br>
          </div>
          <div class='buttons'>
              <div class='verifyMessage' id='verifyMessage'>
                  <button type='button' class=''>Check Answer</button>
                  <button type="submit">Next Question</button>
              </div>
          </div>
      </fieldset>
  </form>
</div>`

} else if (store.popQuiz.view === 'multiple-answer'){

  return `<div class='slides'>
<form id='quizApp'>
    <fieldset>
        <legend class="question">{questions}</legend>
        <div>
            <input 
                type='checkbox'
                name='multipoleChoice'
                id={store.popQuiz.answer}
                class='answer__option'
                check ={selection} === popQuiz[i]correctAnswer} />
            <label htmlFor={store.popQuiz.answer} class='answer__label'>
                    {store.popQuiz.answer[0]} 
            </label><br>
            <input 
                type='checkbox'
                name='multipoleChoice'
                id={store.popQuiz.answer}
                class='answer__option'
                check ={selection} === popQuiz[i]correctAnswer} />
            <label htmlFor={store.popQuiz.answer} class='answer__label'>
                {store.popQuiz.answer[1]} 
            </label><br>
            <input 
                type='checkbox'
                name='multipoleChoice'
                id={store.popQuiz.answer}
                class='answer__option'
                check ={selection} === popQuiz[i]correctAnswer} />
            <label htmlFor={store.popQuiz.answer} class='answer__label'>
                {store.popQuiz.answer[2]} 
            </label><br>
            <input 
                type='checkbox'
                name='multipoleChoice'
                id={store.popQuiz.answer}
                class='answer__option' />
            <label htmlFor={store.popQuiz.answer} class='answer__label'>
                {store.popQuiz.answer[3]} 
            </label><br>
        </div>
        <div class='verifyMessage' id=''></div>
    </fieldset>
</form>` 
} else if (store.store.popQuiz.view === 'boolean'){
return `<div class="slides">
<form id='quizApp'>
<fieldset>
    <legend class="question">{questions}</legend>
    <div>
        <input 
            type='radio'
            name='multipoleChoice'
            id={answers}
            class='answer__option'
            check ={selection} === popQuiz[i]correctAnswer} />
        <label htmlFor={answers} class='answer__label'>
                {answers[0]} 
        </label><br>
        <input 
            type='radio'
            name='multipoleChoice'
            id={answers}
            class='answer__option'
            check ={selection} === popQuiz[i]correctAnswer} />
        <label htmlFor={answers} class='answer__label'>
            {answers[1]} 
        </label><br>
    </form>
  </div>`;
} else {
  //conclusion page
  quizConclusion() {

  }
}
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
  let answer = $('input[name=store.popQuiz.answer]:checked').val();
  if(store.store.popQuiz[store.currentQuestions].correctAnswer == answer){
    alert(`You are correct!`);
  } else {
    alert(`oOf! The correct answer is: ${store.store.popQuiz[currentQuestion].correctAnswer}.`)
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

$(function() { main() });