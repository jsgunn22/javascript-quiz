const quizCards = [
  {
    question:
      "In JavaScript, _______s are used to store a collection of multiple items under a single variable name.",
    answers: ["Object", "Array", "Loop", "Function"],
    correctAnswer: "Array", // this.answers[1],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      "&ltjavascript&gt",
      "&ltjs&gt",
      "&ltscripting&gt",
      "&ltscript&gt",
    ],
    correctAnswer: "<script>", // this.answers[3],
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      "&ltmeta&gt",
      "&lthead&gt",
      "&ltbody&gt",
      "&lthead&gt & &ltbody&gt",
    ],
    correctAnswer: "<body>", // this.answers[2],
  },
  {
    question:
      "What is the correct syntax for referring to an external script called xxx.js?",
    answers: [
      '&ltscript name="xxx.js"&gt',
      '&ltscript id="xxx.js"&gt',
      '&ltscript src="xxx.js"&gt',
      '&ltscript href="xxx.js"&gt',
    ],
    correctAnswer: '<script src="xxx.js">', // this.answers[2],
  },
  {
    question: "The external JavaScript file must contain the &ltscript&gt tag.",
    answers: ["True", "False"],
    correctAnswer: "False", // this.answers[1],
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
      'msgBox("Hello World")',
      'alert("Hello World")',
      'msg("Hello World")',
      'alertBox("Hello World")',
    ],
    correctAnswer: 'alert("Hello World")', // this.answers[1],
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      "function myFunction()",
      "function = myFunction()",
      "function:myFunction()",
      "myFunction = function()",
    ],
    correctAnswer: "function myFunction()", // this.answers[0],
  },
  {
    question: 'How do you call a function called "myFuction"?',
    answers: [
      "call myFunction()",
      "myFunction()",
      "get myFuntion()",
      "call function myFunction()",
    ],
    correctAnswer: "myFunction()", // this.answers[1],
  },
  {
    question: "How do we write an IF statement in JavaScript?",
    answers: ["if (i == 5)", "if i == 5 then", "if i = 5", "if i = 5 then"],
    correctAnswer: "if (i == 5)", // this.answers[0],
  },
  {
    question:
      'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    answers: ["if i <> 5", "if i =! 5 then", "if (i <> 5)", "if (i != 5)"],
    correctAnswer: "if (i != 5)", // this.answers[3],
  },
];

let body = document.body;

// Creates welcome card and message
let card = document.createElement("div");
let welcomeHeader = document.createElement("h2");
let welcomeParagragh = document.createElement("p");
let welcomeButton = document.createElement("button");

body.appendChild(card);
card.appendChild(welcomeHeader);
card.appendChild(welcomeParagragh);
card.appendChild(welcomeButton);

card.setAttribute("id", "card");
card.setAttribute("style", "text-align: center");
welcomeHeader.setAttribute("style", "text-align: center; margin-bottom: 24px");
welcomeParagragh.setAttribute("class", "medium-text");
welcomeParagragh.setAttribute(
  "style",
  "text-align: center; margin-bottom: 24px"
);
welcomeButton.addEventListener("click", startQuiz);

welcomeHeader.innerHTML = "Javascript Speed Coding Quiz";
welcomeParagragh.innerHTML =
  "Answer as many Javascript multiple choice questions as you can within the given time frame. If a question is answered wrong the timer will go down five seconds. When you are complete you will be given the opportunity to save your score and compare it to others.";
welcomeButton.innerHTML = "Start Quiz";

function startQuiz() {
  welcomeHeader.remove();
  welcomeParagragh.remove();
  welcomeButton.remove();

  let i = 0;
  let correct; // need to get this to update
  let score = 0;

  function nextCard() {
    if (i < quizCards.length) {
      // clears the card's dom
      card.innerHTML = "";

      // gets card data
      let questionText = quizCards[i].question;
      let answersText = quizCards[i].answers;

      //creates card elements
      let question = document.createElement("h2");
      let buttonsDiv = document.createElement("div");

      // appends card data
      card.appendChild(question);
      card.appendChild(buttonsDiv);
      question.setAttribute("style", "margin-bottom: 24px; text-align: left");
      question.innerHTML = questionText;
      buttonsDiv.setAttribute("style", "margin-bottom: 24px");

      if (i > 0) {
        let correctIncorrect = document.createElement("p");
        card.appendChild(correctIncorrect);
        correctIncorrect.setAttribute("id", "correct-incorrect");
        if (correct) {
          correctIncorrect.innerHTML = "Correct!";
        } else {
          correctIncorrect.innerHTML = "Incorrect";
        }
      }

      // appends card answer options buttons and adds event listeners
      for (let q = 0; q < quizCards[i].answers.length; q++) {
        let button = document.createElement("button");
        buttonsDiv.appendChild(button);
        button.innerHTML = answersText[q];

        // condition for correct answer
        let temp = false;
        if (button.textContent == quizCards[i].correctAnswer) {
          temp = true;
        }

        // updates correct variable
        button.addEventListener("click", function () {
          correct = temp;
          if (correct) {
            score++;
          }
          //   console.log(score);
        });

        // moves to next quiz card
        button.addEventListener("click", nextCard);
        button.setAttribute("style", "display: block; margin-bottom: 16px");
      }
      // incriments to next card
      i++;
    } else {
      // ends quiz cards and shows final score
      card.innerHTML = "";

      let finalText = document.createElement("h2");
      let scoreText = document.createElement("h1");
      let inputDiv = document.createElement("div");
      let inputField = document.createElement("input");
      let submitButton = document.createElement("button");

      card.appendChild(finalText);
      card.appendChild(scoreText);
      card.appendChild(inputDiv);
      inputDiv.appendChild(inputField);
      inputDiv.appendChild(submitButton);

      finalText.innerHTML = "Your score is";
      scoreText.innerHTML = score;
      scoreText.setAttribute(
        "style",
        "color: var(--success-500); margin-bottom: 24px"
      );
      inputField.setAttribute("placeholder", "Type your initials");
      submitButton.innerHTML = "Submit";
    }
  }
  nextCard();
}
