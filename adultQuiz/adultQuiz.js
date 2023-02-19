(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label >
             
            <input type="radio" name="question${questionNumber}" value="${letter}">
              ${currentQuestion.answers[letter]}
  
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numTracker = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      

    if(userAnswer==='b'){
        numTracker+=1;
    }
    else if (userAnswer==='c'){
        numTracker+=2;
    };

     /* // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      } */

      if (numTracker<10 || numTracker===10){
        resultsContainer.innerHTML = `${numTracker} out of 50`+ '<br /> These results indicate that you experience <strong> no tendencies of autism.</strong>';
      }else if (numTracker<10 || numTracker===20){
        resultsContainer.innerHTML=`${numTracker} out of 50`+ '<br /> These results indicate that you experience a <strong>few tendencies of autism.</strong>';
    }else if (numTracker<20 || numTracker===30){
        resultsContainer.innerHTML=`${numTracker} out of 50`+ '<br /> These results indicate that you experience <strong>slight tendencies of autism.</strong>';
        }else if (numTracker<30 || numTracker===40){
        resultsContainer.innerHTML=`${numTracker} out of 50`+ '<br /> These results indicate that you have a <strong>borderline inclination for autism.</strong>';
      }else {
        resultsContainer.innerHTML=`${numTracker} out of 50`+ '<br /> These results indicate that you have a <strong>strong likelihood of having autism.</strong>';

      }

      moreContainer.innerHTML= ' <div style="border: solid; padding:30px; margin:30px;"> <br> <strong>What should I do now?</strong> <p>Please remember that this test only indicates the common signs of autism based on your experiences. Your result is not a clinical diagnosis and does not necessarily mean you are autistic. However, people who report scores like yours often benefit from an autism assessment. </p> </div>';
// show number of correct answers out of total
    });

  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const moreContainer= document.getElementById('more');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1. Is your sense of humor fairly unconventional?",

      answers: {
        a: "No/Never",
        b: "A little/Sometimes",
        c: "Yes/Often",
        d: "I don't know",
      },


    },
    {
      question: "2. Do you tend to interpret things literally?",
      answers: {
        a: "No/Never",
        b: "A little/Sometimes",
        c: "Yes/Often",
        d: "I don't know",
      },

    },
    {
      question: "3. Do you tend to shut down or have a meltdown when stressed or overwhelmed?",
      answers: {
        a: "No/Never",
        b: "A little/Sometimes",
        c: "Yes/Often",
        d: "I don't know",
      },
      
    },
    {
        question: "4. Do you have extra sensitive hearing?",
        answers: {
          a: "No/Never",
        b: "A little/Sometimes",
        c: "Yes/Often",
        d: "I don't know",
        },
       
    },
    {
        question: "5. As a teenager, were you usually unaware of social rules & boundaries unless they were clearly spelled out?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },
      {
        question: "6. Do others often misunderstand you?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
       
      },
      {
        question: "7. Do you have difficulty accepting criticism, correction, and direction?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },
      {
        question: "8. Have people you formed strong attachments to taken advantage of you?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },
      {
        question: "9. Are you easily distracted?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
       
      },
      {
        question: "10. Do people sometimes think you are smiling at the wrong occasion?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },

      {
        question: "11. Do you tend to say things that are considered socially inappropriate when you are tired, frustrated or when you act naturally?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },
      {
        question: "12. Is your sense of humor different from mainstream or considered odd?",
    
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },
      {
        question: "13. Do you tend to get so absorbed by your special interests that you forget or ignore everything else?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },
      {
        question: "14. Do you get confused by several verbal instructions at the same time?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },
      {
        question: "15. Do you prefer to keep to yourself?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },
      {
        question: "16. Is it hard for you to see why some things upset people so much?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },
      {
        question: "17. Before doing something or going somewhere, do you need to have a picture in your mind of what's going to happen so as to be able to prepare yourself mentally first?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },
      {
        question: "18. Do you have certain routines which you need to follow?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },
      {
        question: "19. Would you quickly become impatient and irritated if you could not find a solution to a problem?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },
      {
        question: "20. Has it been harder for you than for others to keep friends?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },
      {
        question: "21. Do you bite your lip, cheek or tongue (e.g. when thinking, when anxious or nervous)?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
       
      },
      {
        question: "22. Do you find it hard to describe your feelings?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },
      {
        question: "23. Have you experienced stronger than normal attachments to certain people?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },
      {
        question: "24. Do you have problems with timing in conversations?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      },
      {
        question: "25. Are you bad at interpreting facial expressions?",
        answers: {
            a: "No/Never",
            b: "A little/Sometimes",
            c: "Yes/Often",
            d: "I don't know",
        },
        
      }
  ];



  // Kick things off
  buildQuiz();


  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");

  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();


