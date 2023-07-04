const quizCards = [
  {
    question:
      "In JavaScript, _______s are used to store a collection of multiple items under a single variable name.",
    answers: ["Object", "Array", "Loop", "Function"],
    correctAnswer: this.answers[1],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<javascript>", "<js>", "<scripting>", "<script>"],
    correctAnswer: this.answers[3],
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: ["<meta>", "<head>", "<body>", "<head> & <body>"],
    correctAnswer: this.answers[2],
  },
  {
    question:
      "What is the correct syntax for referring to an external script called xxx.js?",
    answers: [
      '<script name="xxx.js">',
      '<script id="xxx.js">',
      '<script src="xxx.js">',
      '<script href="xxx.js">',
    ],
    correctAnswer: this.answers[2],
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    answers: ["True", "False"],
    correctAnswer: this.answers[1],
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
      'msgBox("Hello World")',
      'alert("Hello World")',
      'msg("Hello World")',
      'alertBox("Hello World")',
    ],
    correctAnswer: this.answers[1],
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      "function myFunction()",
      "function = myFunction()",
      "function:myFunction()",
      "myFunction = function()",
    ],
    correctAnswer: this.answers[0],
  },
  {
    question: 'How do you call a function called "myFuction"?',
    answers: [
      "call myFunction()",
      "myFunction()",
      "get myFuntion()",
      "call function myFunction()",
    ],
    correctAnswer: this.answers[1],
  },
  {
    question: "How do we write an IF statement in JavaScript?",
    answers: ["if (i == 5)", "if i == 5 then", "if i = 5", "if i = 5 then"],
    correctAnswer: this.answers[0],
  },
  {
    question:
      'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    answers: ["if i <> 5", "if i =! 5 then", "if (i <> 5)", "if (i != 5)"],
    correctAnswer: this.answers[0],
  },
];
