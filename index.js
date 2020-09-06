 // disable buttons until an answer is selected. 

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
  $('#resource').on('click', function(e){
    e.preventDefault;
    window.open('https://www.amenclinics.com/blog/the-9-biggest-myths-about-add-that-you-need-to-know/', '_blank');    
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
    $('.answerReveal').html('');
    let selected = $('input:checked');
    let answer = selected.val();
    submitAnswer(answer);
    if(quizConclude()) {
      finalPage();
    } else {
      incrament();
      renderList();
    }
  });
}

function handleStoreAnswer(){
  $('main').on('click', '.form', event => {
    event.preventDefault;
  });
}

function incrament() {
  STORE.currentQuestion++; 
}

function handleCheckAnswer() {
  $('main').on('click', '#checkAnswer', event => {
    event.preventDefault();
    let i = STORE.currentQuestion;
    $('.answerReveal').html(`
      <div class='modal'>
        <div class='modalWrapper'>
          <legend class='modalHeader'><h3 class='modalAnswerIntro'></h3></legend>
          <fieldset>
            <p class='modalAnswerResult'></p>
          </fieldset>
        </div>
      </div>`
    );
    $('.modalAnswerIntro').html('The Correct Answer Is:');
    $('.modalAnswerResult').html(`${STORE.questions[i].correctAnswer}`);
    $('.modalScore').html(`Score: ${STORE.score} / 100`);
      
  });
}

function generateQView(){
  let i = STORE.currentQuestion;
  let displayedQ = STORE.currentQuestion + 1;
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
            <hr>
            <div class='buttonWrapper'>
              <div class='buttons' id='buttons'>
                <button type='button' id='checkAnswer'>Check</button>
                <button type='button' id='nextQ'>Next</button>
              </div>
            </div>
            <div clas='scoreWrapper'>
              <p class='modalScore'>Score: ${STORE.score} / 100</p>
            </div>
            <div class='answerReveal'></div>
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

function finalPage() {
  $('main').html(quizConclusion());
}

function submitAnswer(answer) {
  let i = STORE.currentQuestion;
  let correct = null;
  if(STORE.questions[i].correctAnswer === answer){
    console.log('correct');
    //update value of score
    STORE.score += 10;
  } else {
    console.log('incorrect');
    //update value of wrongScore
    STORE.wrongScore += 1;
    $('.score').html(`Score: ${STORE.score}/100`);
  }
}

function quizConclude(){
  if (STORE.currentQuestion === 9) {
    return true;
  };
}

function quizConclusion() {
  return `<div class="quizConclusion">
            <form id='end'>
              <fieldset>
                <legend class='conclusion'>Quiz Completed</legend>
                <div>
                  <p>Congratulations!</p>
                  <p>Your final score was ${STORE.score} out of 100!</p>
                  <p>You answered ${STORE.wrongScore} wrong.</p>
                </div>
                <div>
                  <button type='button' class='resource' id='resource'>Review</button>
                  <button class="quizConlude" type="submit">Restart Quiz</button>
                </div>
              </fieldset>
            </form>
          </div>`;
}

function startAgain() {
  $('main').on('click', '.quizConclude', () => {
    if (STORE.questions.currentQuestion === STORE.questions.questions.length) {
      //reset currentQuestion
      STORE.questions.currentQuestion = 1;
      //reset score
      STORE.questions.score = 0;
      //reset wrongScore
      STORE.questions.wrongScore = 0;
      let quizConclude = generateStartPage();
      $('main').html(quizConclude);
    }
    startQuiz();
  });
}

function eventHandle() { 
  main();
  startQuiz();
  handleCheckAnswer();
  handleStoreAnswer();
  reveiw();
  nextQuestion();
}

$(eventHandle);