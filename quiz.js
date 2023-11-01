const questions = [
    {
        text: "Who is the president of Nigeria ?",
        options: ["peter Obi", "Ayade", "Tinubu", "Atiku"],
        answer: "Tinubu"
    },
    {
        text: "What is the lastest iphone?",
        options: ["iphone 10", "iphone 13", "iphone 20", "iphone 12"],
        answer: "iphone 12"
    },
    {
        text: "Nigeria was made up of how many states?",
        options: ["10 states", "40 states", "36 states", "100 states"],
        answer: "36 states"
    },
    {
        text: "Is kodecamp the best Yes/No?",
        options: ["Yes", "No", "A litte", "Not trying"],
        answer: "Yes"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score-value');

function displayQuestion() {
    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion].text;
        optionsElement.innerHTML = "";
        questions[currentQuestion].options.forEach((option, index) => {
            const li = document.createElement('li');
            li.textContent = option;
            li.addEventListener('click', () => checkAnswer(option));
            optionsElement.appendChild(li);
        });
    } else {
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = "";
        resultElement.textContent = `Your Total Score is: ${score}`;
    }
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
        resultElement.textContent = "Correct!";
        score++;
    } else {
        resultElement.textContent = "Incorrect!";
    }

    currentQuestion++;
    scoreElement.textContent = score;
    setTimeout(() => {
        resultElement.textContent = "";
        displayQuestion();
    }, 1000);
}

displayQuestion();