---
layout: post
title: Quiz Time!
permalink: /AppearanceFreeActionRecognition/quiz
subheading: <b>Filip Ilic</b>, Thomas Pock, Richard P. Wildes
venue: ECCV
exclude: true
---


<b>Is Appearance Free Action Recognition Possible?<br></b>
If you're get more than 90% right, come to my poster stand and grab some sweets 🍬

<!-- HEY DONT CHEAT BY LOOKING AT THE CODE, YOU SNEAKY DEVIL -->
<i>Primer:</i>
The quiz below contains Appearance Free Action Videos from the 5 classes: 


<table style='margin-bottom:0px' width="100%">
  <tr>
    <td width="20%"><video controls="" autoplay="" loop="" muted="" playsinline width="100%"><source src="../papers/AppearanceFreeActionReconigtion/quiz/primer/v_JumpingJack_g18_c02.mp4
" type="video/mp4"/></video></td>

    <td width="20%"><video controls="" autoplay="" loop="" muted="" playsinline width="100%"><source src="../papers/AppearanceFreeActionReconigtion/quiz/primer/v_Lunges_g24_c01.mp4" type="video/mp4"/></video></td>
    
    <td width="20%"><video controls="" autoplay="" loop="" muted="" playsinline width="100%"><source src="../papers/AppearanceFreeActionReconigtion/quiz/primer/v_PullUps_g19_c01.mp4" type="video/mp4"/></video></td>

    <td width="20%"><video controls="" autoplay="" loop="" muted="" playsinline width="100%"><source src="../papers/AppearanceFreeActionReconigtion/quiz/primer/v_PushUps_g05_c04.mp4" type="video/mp4"/></video></td>

    <td width="20%"><video controls="" autoplay="" loop="" muted="" playsinline width="100%"><source src="../papers/AppearanceFreeActionReconigtion/quiz/primer/v_Swing_g08_c03.mp4" type="video/mp4"/></video></td>
  </tr>
</table>
<table style='margin-top:0px' width="100%">
  <tr style='text-align: center; font-size:9pt'>
    <td width="20%">JumpingJack</td>
    <td width="20%">Lunges</td>
    <td width="20%">PullUps</td>
    <td width="20%">PushUps</td>
    <td width="20%">Swing</td>
  </tr>
</table>
<hr>
<br>
<br>
<br>
<html>

<body>
<div class="quiz-container">
  <div id="quiz"></div>
</div>
<center>
<div class="buttongroup">
<button id="submit">Check Answers!</button>
</div>
<br>
<br><br><br>
<div id="results"></div>
</center>
</body>
</html>


<style>
.buttongroup button{
    font-size:22pt;
}
.answers {
    font-size:16pt;
    text-align:left;
    display:inline-block;
}
</style>

<script type='text/javascript'>
(function(){
  function buildQuiz(){
    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${currentQuestion.answers[letter]}<br>
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `
          <div class="slide"> 
          <center>
            <div class="ressource"><video controls="" autoplay="" loop="" muted="" playsinline width="85%"><source src="${currentQuestion.video}" type="video/mp4" /></video></div>
            <table><div class="answers"> ${answers.join("")} </div></table>
            </center>
          </div>
          <hr>
          `
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} correct (${100* numCorrect / parseFloat(myQuestions.length)}%)`;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
myQuestions = [{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_PushUps_g05_c02.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "d" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_JumpingJack_g03_c02.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "a" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_PullUps_g10_c03.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "c" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_PullUps_g14_c03.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "c" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_PushUps_g01_c01.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "d" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_JumpingJack_g02_c01.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "a" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_Lunges_g08_c02.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "b" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_Lunges_g02_c04.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "b" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_PullUps_g03_c01.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "c" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_Swing_g04_c03.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "e" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_Lunges_g13_c04.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "b" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_PushUps_g09_c01.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "d" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_Swing_g08_c03.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "e" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_JumpingJack_g07_c01.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "a" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_JumpingJack_g10_c01.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "a" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_Lunges_g24_c04.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "b" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_PullUps_g05_c01.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "c" 
}, 
{ 
video: "../papers/AppearanceFreeActionReconigtion/quiz/data/v_Swing_g23_c02.mp4", 
answers: { 
                        a: "JumpingJack", 
                        b: "Lunges", 
                        c: "PullUps",
                        d: "PushUps",
                        e: "Swing" 
                        }, 
correctAnswer: "e" 
}
 ];

  myQuestions.sort(() => Math.random() - 0.5); // shuffle questions around, ggwp javascript.
  let numQuestionsShown = 10 // max 18
  myQuestions = myQuestions.slice(0, numQuestionsShown);


  buildQuiz();
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  submitButton.addEventListener('click', showResults);
})();
</script>

