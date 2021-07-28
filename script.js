const quizData = [
  {
    question: "Who is the main character in Dragon Ball Z?",
    a: "Gohan",
    b: "Vegeta",
    c: "Krillin",
    d: "Goku",
    correct: "d",
  },
  {
    question: "Who defeats Cell, during the Cell Saga?",
    a: "Future Trunks",
    b: "Gohan",
    c: "Goku",
    d: "Vegeta",
    correct: "b",
  },
  {
    question:
      "In which planet, does Goku learn the instant transmission technique?",
    a: "Planet Namek",
    b: "Planet Earth",
    c: "Planet Yardrat",
    d: "Planet Vegeta",
    correct: "c",
  },
  {
    question: "Who kills Frieza?",
    a: "Future Trunks",
    b: "Vegeta",
    c: "Piccolo",
    d: "Goku",
    correct: "a",
  },
  {
    question: "Who is the prince of all saiyans?",
    a: "Vegeta",
    b: "Goku",
    c: "Gohan",
    d: "Future Trunks",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEl = document.querySelectorAll(".answer");
const a = document.getElementById("option-a");
const b = document.getElementById("option-b");
const c = document.getElementById("option-c");
const d = document.getElementById("option-d");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuestion];

  questionEl.innerText = currentQuizData.question;
  a.innerText = currentQuizData.a;
  b.innerText = currentQuizData.b;
  c.innerText = currentQuizData.c;
  d.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answersEl.forEach((answersEl) => {
    if (answersEl.checked) {
      answer = answersEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answersEl.forEach((answersEl) => {
    answersEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h1>Completed! Your score is ${score}/${currentQuestion}</h1> 
        <button onclick="location.reload()">Play Again</button>`;
    }
  }
});
