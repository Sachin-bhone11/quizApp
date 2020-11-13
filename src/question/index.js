const qBank = [
  {
    question:
      " Everything in React is a?   ",
    answers: ["Component", "module", "class"],
    correct: "Component",
    questionId: "099099"
  },
  {
    question:
      " In which directory React Components are saved?",
    answers: ["Inside js/components/", "Inside vendor/components/", "Inside vendor/"],
    correct: "Inside js/components/",
    questionId: "183452"
  },
  {
    question:
      " How many elements does a react component return?",
    answers: ["2 Elements", "1 Elements", "Multiple Elements"],
    correct: "Multiple Elements",
    questionId: "267908"
  },
  {
    question: " What is Babel?",
    answers: [
      "An interpreter",
      " Compiler",
      "Both Compiler and Transpilar"
    ],
    correct: "Both Compiler and Transpilar",
    questionId: "333247"
  },
  {
    question: "What port is the default where the webpack-dev-server will run?",
    answers: ["3000", "3306", "8080"],
    correct: "8080",
    questionId: "785412"
  },
  {
    question: "What is the name of React.js Developer ?",
    answers: [
      "Jordan mike",
      "Jordan Lee",
      "Jordan Walke"
    ],
    correct: "Jordan Walke",
    questionId: "745656"
  },
  {
    question: " React.js Covers only the view layer of the app.",
    answers: [
      "Yes",
      "No",
      "Both"
    ],
    correct: "Yes",
    questionId: "741545"
  },
  {
    question: " Who Develop React.js?",
    answers: [
      "Facebook",
      "Apple",
      "Twitter"
    ],
    correct: "Facebook",
    questionId: "495142"
  },
  {
    question: " Keys are given to a list of elements in react. These keys should be -",
    answers: [
      "Do not requires to be unique",
      "Unique in the DOM",
      "Unique among the siblings only"
    ],
    correct: "Unique among the siblings only",
    questionId: "496293"
  },
  {
    question: " ReactJS uses _____ to increase performance",
    answers: [
      "Original DOM",
      "Virtual DOM",
      "Both 1 & 2"
    ],
    correct: "Virtual DOM",
    questionId: "495021"
  },
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
