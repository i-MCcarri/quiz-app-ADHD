const i = STORE.currentQuestion;
const q = STORE.currentQuestion;
const displayedQ = q+1;

function generateStartPage() {
  return `<div class='startPage'>
            <fieldset>
                <legend class="startQuestion"><h3></h3></legend>
                <div></div>
                <div class='buttons'>
                    <div>
                      <form id='start'>                    
                        <button type='submit' class='startQuiz' id='startQuiz' value='submit'style=''>Begin Quiz</button>
                      </form>
                    </div>
                </div>
            </fieldset>
          </div>`;
}

function reveiw() {
  $('#resource').on('click', function(){
    open('https://www.amenclinics.com/blog/the-9-biggest-myths-about-add-that-you-need-to-know/');    
  });
}

function startQuiz() {
  $('main').on('click', '#startQuiz', event => {
    event.preventDefault();
    renderList();
  });
}

function nextQuestion() {
  $('main').on('click', '#nextQ', event => {
    event.preventDefault();
    console.log(STORE.currentQuestion);
    $('.answerReveal').html('');
    $('main').on('submit', 'nextQ', event => {
      event.preventDefault;
      if(quizConclude === true) {
        quizConclusion();
      } else {
        renderList();
      }
    });
  });
}

function handleStoreAnswer(){
  $('main').on('change', '.form', event => {
    event.preventDefault;
    const selected = $('input:checked');
    const answer = selected.val();
    submitAnswer(answer);
  });
}

function handleCheckAnswer() {
  $('main').on('click', '#checkAnswer', event => {
    event.preventDefault();
    $('.answerReveal').html(`
      <div class='modal'>
        <div class='modalWrapper'>
          <legend class='modalHeader'><h5 class='modalAnswerIntro'></h5></legend>
          <fieldset>
            <p class='modalAnswerResult'></p>
          </fieldset>
        </div>
      </div>`
    );
    $('.modalQuestionCount').html(`Question: ${displayedQ} / 10`);
    $('.modalAnswerIntro').html('the correct answer is:');
    $('.modalAnswerResult').html(`${STORE.questions[i].correctAnswer}`);
    $('.modalScore').html(`Score: ${STORE.score} / 100`);
      
  });
}

function generateQView(){ 
  STORE.currentQuestion ++;
  return `
  <div class='modalQuestionCount'>Question: ${displayedQ} / 10</div>
  <div class='box'></div>
    <div class='slides'>
      <form class='form' id='quizApp'>
        <fieldset>
            <legend class='question'><h3>${STORE.questions[i].question}</h3></legend>
            <div class='answer__option'>
                <input 
                    type='radio'
                    name='answers'
                    id='answers'
                    class='answer__option'
                    value='${STORE.questions[i].answers[0]}' 
                    />
                <label htmlFor='answers' class='answer__label'>
                        ${STORE.questions[i].answers[0]} 
                </label><br>
                <input 
                    type='radio'
                    name='answers'
                    id='answers'
                    class='answer__option'
                    value='${STORE.questions[i].answers[1]}'
                    />
                <label htmlFor='answers' class='answer__label'>
                ${STORE.questions[i].answers[1]} 
                </label><br>
                <input 
                    type='radio'
                    name='answers'
                    id='answers'
                    class='answer__option'
                    value='${STORE.questions[i].answers[2]}'
                    />
                <label htmlFor='answers' class='answer__label'>
                ${STORE.questions[i].answers[2]} 
                </label><br>
                <input 
                    type='radio'
                    name='answers'
                    id='answers'
                    class='answer__option'
                    value='${STORE.questions[i].answers[3]}'
                    required />
                <label htmlFor='answers' class='answer__label'>
                ${STORE.questions[i].answers[3]} 
                </label><br>
              </div>
            </div>
            <div class='answerReveal'></div>
            <hr>
            <div class='buttonWrapper'>
              <div class='buttons' id='buttons'>
                <button type='button' id='checkAnswer'>Check Answer</button>
                <button type='submit' id='nextQ' value='submit'>Next Question</button>
              </div>
            </div>
            <div clas='scoreWrapper'>
              <p class='modalScore'>Score: ${STORE.score} / 100</p>
            </div>
          </div>
        </fieldset>
    </form>
  </div>`;
}



function renderList(){
  $('main').html(generateQView());
}

function main() {
  $('main').html(generateStartPage());
}

function submitAnswer(answer) {
  console.log(answer);
  if(STORE.questions[i].correctAnswer == answer){
    console.log('correct');
    //correct answer result
    //update value of score
    STORE.score += 10;
  } else {
    console.log('incorrect');
    //incorrect answer result
    //update value of wrongScore
    STORE.wrongScore += 1;
    $('.score').html(`Score: ${STORE.score}/100`);
  }
}

function quizConclude(){
  return STORE.questions.length === STORE.currentQuestion;
}

function quizConclusion(){
  return `<div class="quizConclusion">
            <form id='end'>
              <fieldset>
                <legend class='conclusion'>Quiz Completed</legend>
                <div>
                  <p>Congratulations!</p>
                  <p>Your final score was ${STORE.questions.score} out of 100!</p>
                  <p>You answered ${STORE.questions.wrongScore} wrong.</p>
                </div>
                <div>
                  <button type='submit' class='resource' id='resource' value='submit'>Review</button>
                  <button class="quizConlude" type="submit">Restart Quiz</button>
                </div>
              </fieldset>
            </form>
          </div>`;
}

// function startAgain() {
//   $('main').on('click', '.quizConclude', () => {
//     if (STORE.questions.currentQuestion === STORE.questions.questions.length) {
//       //reset currentQuestion
//       STORE.questions.currentQuestion = 1;
//       //reset score
//       STORE.questions.score = 0;
//       //reset wrongScore
//       STORE.questions.wrongScore = 0;
//       let quizConclude = generateStartPage();
//       $('main').html(quizConclude);
//     }
//     startQuiz();
//   });
// }



function eventHandle() { 
  main();
  startQuiz();
  handleCheckAnswer();
  handleStoreAnswer();
  reveiw();
  nextQuestion();
};

$(eventHandle);