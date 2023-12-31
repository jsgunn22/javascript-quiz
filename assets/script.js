const quizCards = [
  {
    question:
      "In JavaScript, _______s are used to store a collection of multiple items under a single variable name.",
    answers: ["Object", "Array", "Loop", "Function"],
    correctAnswer: "Array",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      "&ltjavascript&gt",
      "&ltjs&gt",
      "&ltscripting&gt",
      "&ltscript&gt",
    ],
    correctAnswer: "<script>",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      "&ltmeta&gt",
      "&lthead&gt",
      "&ltbody&gt",
      "&lthead&gt & &ltbody&gt",
    ],
    correctAnswer: "<body>",
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
    correctAnswer: '<script src="xxx.js">',
  },
  {
    question: "The external JavaScript file must contain the &ltscript&gt tag.",
    answers: ["True", "False"],
    correctAnswer: "False",
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
      'msgBox("Hello World")',
      'alert("Hello World")',
      'msg("Hello World")',
      'alertBox("Hello World")',
    ],
    correctAnswer: 'alert("Hello World")',
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      "function myFunction()",
      "function = myFunction()",
      "function:myFunction()",
      "myFunction = function()",
    ],
    correctAnswer: "function myFunction()",
  },
  {
    question: 'How do you call a function called "myFuction"?',
    answers: [
      "call myFunction()",
      "myFunction()",
      "get myFuntion()",
      "call function myFunction()",
    ],
    correctAnswer: "myFunction()",
  },
  {
    question: "How do we write an IF statement in JavaScript?",
    answers: ["if (i == 5)", "if i == 5 then", "if i = 5", "if i = 5 then"],
    correctAnswer: "if (i == 5)",
  },
  {
    question:
      'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    answers: ["if i <> 5", "if i =! 5 then", "if (i <> 5)", "if (i != 5)"],
    correctAnswer: "if (i != 5)",
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

// clickables
// prettier-ignore
document.getElementById("high-scores").addEventListener("click", viewHighScores);
welcomeButton.addEventListener("click", startQuiz);

// Prints card upon page load
welcomeHeader.innerHTML = "Javascript Coding Speed Quiz";
welcomeParagragh.innerHTML =
  "Answer as many Javascript multiple choice questions as you can within the given time frame. If a question is answered wrong the timer will lose 5 seconds. When you are complete you will be given the opportunity to save your score and compare it to others.";
welcomeButton.innerHTML = "Start Quiz";

// renders list of 5 most recent scores
function viewHighScores() {
  // Changed top nav text button and allows for app reload
  let buttonReassign = document.getElementById("high-scores");
  buttonReassign.innerHTML = "Back to Main";
  buttonReassign.addEventListener("click", refresh);

  function refresh() {
    location.reload();
  }

  // clears card for new DOM
  card.innerHTML = "";
  card.setAttribute("style", "text-align: center");

  // gets scores stored in local storage
  let scores = JSON.parse(localStorage.getItem("allScores"));

  // prevents crash
  if (scores == null) {
    scores = [];
  }
  // gets the number of scores stored in the local
  let numberOfScores = scores.length;
  // sets an empty localStorage length to 0 and resets score count to show max 5 recent scores
  if (numberOfScores > 5) {
    numberOfScores = 5;
  }

  // conditional for no scores saved in localStorage empty state
  if (numberOfScores == 0) {
    let highScoreHeader = document.createElement("h2");
    let goBackButton = document.createElement("button");

    card.appendChild(highScoreHeader);
    card.appendChild(goBackButton);
    highScoreHeader.innerHTML = "No Scores have been logged";
    highScoreHeader.setAttribute(
      "style",
      "color: var(--neutral-700); margin-bottom: 24px"
    );
    goBackButton.innerHTML = "Go Back";
    goBackButton.addEventListener("click", refresh);
  } else {
    // sets table column headers
    let highScoreHeader = document.createElement("h2");
    card.appendChild(highScoreHeader);
    highScoreHeader.innerHTML = numberOfScores + " Most Recent Scores";
    highScoreHeader.setAttribute("style", "margin-bottom: 24px");

    let tableHeaderDiv = document.createElement("div");
    let tableHeaderInitial = document.createElement("h3");
    let tableHeaderScore = document.createElement("h3");
    let tableHeaderTime = document.createElement("h3");

    card.appendChild(tableHeaderDiv);
    tableHeaderDiv.appendChild(tableHeaderInitial);
    tableHeaderDiv.appendChild(tableHeaderScore);
    tableHeaderDiv.appendChild(tableHeaderTime);

    tableHeaderInitial.innerHTML = "Initials";
    tableHeaderScore.innerHTML = "Score";
    tableHeaderTime.innerHTML = "Remaining Time";

    tableHeaderDiv.setAttribute("id", "table-header-div");

    // reverses the array of scores stored in the localStorage so the most recent will appear at the top
    scores.reverse();

    // prints up to 5 of the most recent scores
    for (let s = 0; s < numberOfScores; s++) {
      let scoreItemDiv = document.createElement("div");
      let scoreItemInitial = document.createElement("h2");
      let scoreItemScore = document.createElement("h2");
      let scoreItemTime = document.createElement("h2");

      card.appendChild(scoreItemDiv);
      scoreItemDiv.appendChild(scoreItemInitial);
      scoreItemDiv.appendChild(scoreItemScore);
      scoreItemDiv.appendChild(scoreItemTime);

      scoreItemInitial.innerHTML = scores[s].myInitials;
      scoreItemScore.innerHTML = scores[s].myScore;
      scoreItemTime.innerHTML = scores[s].myTime;

      scoreItemDiv.setAttribute("class", "score-item-div");
    }
    // Creates button section at bottom of list
    let buttonsDiv = document.createElement("div");
    let goBackButton = document.createElement("button");
    let clearButton = document.createElement("button");

    card.appendChild(buttonsDiv);
    buttonsDiv.setAttribute(
      "style",
      "width: 100%; display: flex; justify-content: space-between"
    );
    buttonsDiv.appendChild(goBackButton);
    buttonsDiv.appendChild(clearButton);

    goBackButton.innerHTML = "Go Back";
    clearButton.innerHTML = "Clear Recent Scores";
    clearButton.setAttribute("style", "background-color: var(--danger-500)");

    // allows user to clear local storage
    clearButton.addEventListener("click", function () {
      localStorage.clear();
      viewHighScores();
    });

    goBackButton.addEventListener("click", refresh);
  }
}

function startQuiz() {
  welcomeHeader.remove();
  welcomeParagragh.remove();
  welcomeButton.remove();

  let i = 0;
  let correct; // * updates per button click based on answer selection
  let score = 0;

  let timeLeft = 60;
  let secondsRemaining = document.getElementById("seconds-remaining");
  secondsRemaining.innerHTML = timeLeft;

  // time counter and conditional to render final card when time runs out
  var countDown = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      secondsRemaining.innerHTML = timeLeft;
    } else {
      clearInterval(countDown);
      // ends quiz and passes in the message
      final("You ran out of time");
    }
  }, 1000);

  // final card / conditional for whether the time ran out of if the user completed all messages
  function final(messageProp) {
    card.innerHTML = "";

    let messageText = document.createElement("p");
    let finalText = document.createElement("h2");
    let scoreDiv = document.createElement("div");
    let scoreText = document.createElement("h1");
    let ofScoreText = document.createElement("h3");
    let timeRem = document.createElement("p");
    let inputDiv = document.createElement("div");
    let inputField = document.createElement("input");
    let submitButton = document.createElement("button");

    card.appendChild(messageText);
    card.appendChild(finalText);
    card.appendChild(scoreDiv);
    scoreDiv.appendChild(scoreText);
    scoreDiv.appendChild(ofScoreText);
    card.appendChild(timeRem);
    card.appendChild(inputDiv);
    inputDiv.appendChild(inputField);
    inputDiv.appendChild(submitButton);

    messageText.setAttribute("style", "color: var(--neutral-700)");
    messageText.setAttribute("class", "large-text");

    messageText.innerHTML = messageProp;
    finalText.innerHTML = "Your score is";

    // sets score to show score vs possible total
    scoreDiv.setAttribute(
      "style",
      "display: flex; justify-content: center; margin-bottom: -12px"
    );
    scoreText.innerHTML = score;
    scoreText.setAttribute(
      "style",
      "color: var(--success-500); margin-bottom: 24px; margin-right: 8px"
    );
    ofScoreText.innerHTML = "/ " + quizCards.length;
    ofScoreText.setAttribute(
      "style",
      "color: var(--neutral-700); margin-top: 10px"
    );

    timeRem.setAttribute(
      "style",
      "color: var(--neutral-700); margin-bottom: 8px"
    );

    if (timeLeft > 0) {
      timeRem.innerHTML = "with " + timeLeft + " seconds to spare";
    }

    inputField.setAttribute("placeholder", "Type your initials");
    submitButton.innerHTML = "Submit";

    submitButton.addEventListener("click", pushToStorage);
    submitButton.addEventListener("click", viewHighScores);

    clearInterval(countDown);

    // pushes score info to local storage
    function pushToStorage() {
      let myScore = {
        myInitials: inputField.value,
        myScore: score,
        myTime: timeLeft,
      };
      // gets previous scores and parses to an array
      var existingScores = JSON.parse(localStorage.getItem("allScores"));
      if (existingScores === null) {
        existingScores = [];
      }
      localStorage.setItem("myScore", JSON.stringify(myScore));
      existingScores.push(myScore); // pushes newest score to array
      localStorage.setItem("allScores", JSON.stringify(existingScores)); // pushes updated array to localStorage
    }
  }

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

      // * updates card to let user know if they got the previous question right or wrong.
      if (i > 0) {
        let correctIncorrect = document.createElement("p");
        card.appendChild(correctIncorrect);
        correctIncorrect.setAttribute("id", "correct-incorrect");
        if (correct) {
          correctIncorrect.innerHTML = "Correct!";
        } else {
          correctIncorrect.innerHTML = "Incorrect... - 5 seconds";
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
          // if the button text matches the key value pair for correctAnswer
          temp = true;
        }

        // * updates correct variable and incriments score
        button.addEventListener("click", function () {
          correct = temp;
          if (correct) {
            score++;
          } else {
            timeLeft = timeLeft - 5;
            secondsRemaining.innerHTML = timeLeft;
          }
        });
        button.classList.add("answer-hover");

        // moves to next quiz card
        button.addEventListener("click", nextCard);
        button.setAttribute("style", "display: block; margin-bottom: 16px");
      }
      // incriments to next card
      i++;
    } else {
      // ends quiz cards and shows final score with message passed in
      if (score === quizCards.length) {
        final("A perfect score!");
      } else {
        final("You completed all of the questions");
      }
    }
  }
  nextCard();
}
