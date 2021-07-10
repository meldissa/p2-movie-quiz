//list of quiz questions
const questions = [
    {
        question: "What was the name of the first film in the 'Harry Potter' series?",
        ans1: "Harry Potter and the Order of the Phoenix",
        ans2: "Harry Potter and the Prisoner of Azkaban",
        ans3: "Harry Potter and the Philosopher's Stone",
        ans4: "Harry Potter and the Goblet of Fire",
        correct: "3"
    },
    {
        question: "In which movie was the iconic DeLorean time machine originally a refrigerator?",
        ans1: "Back To The Future",
        ans2: "Hot Tub Time Machine",
        ans3: "About Time",
        ans4: "Land Of The Lost",
        correct: "1"
    },
    {
        question: "When adjusted for inflation, which is the highest-grossing movie of all time?",
        ans1: "Titanic",
        ans2: "Gone With The Wind",
        ans3: "Avatar",
        ans4: "Avengers: Endgame",
        correct: "2"
    },
    {
        question: "In which movie did Leonardo DiCaprio have to devour a raw slab of bison's liver, despite being a vegetarian?",
        ans1: "The Wolf of Wall Street",
        ans2: "Shutter Island",
        ans3: "Django Unchained",
        ans4: "The Revenant",
        correct: "4"
    },
    {
        question: "How many 'Star Wars' movies are there?",
        ans1: "12",
        ans2: "10",
        ans3: "9",
        ans4: "11",
        correct: "1"
    },
    {
        question: "For which movie did Tim Burton train 40 squirrels to crack nuts for, rather than use CGI?",
        ans1: "Alice in Wonderland",
        ans2: "Charlie and the Chocolate Factory",
        ans3: "Corpse Bride",
        ans4: "Edward Scissorhands",
        correct: "2"
    },
    {
        question: "The directors of which movie wrote a new language, that the minions speak throughout the movie?",
        ans1: "Sing",
        ans2: "The Secret Life of Pets",
        ans3: "Despicable Me",
        ans4: "The Lorax",
        correct: "3"
    },
    {
        question: "What is the name of the fourth film of the 'Mad Max' series, set in the year 2060?",
        ans1: "Mad Max",
        ans2: "Mad Max Beyond Thunderdome",
        ans3: "Mad Max: The Wasteland",
        ans4: "Mad Max: Fury Road",
        correct: "4"
    },
    {
        question: "In the Avengers movies, what is the name of Thor's hammer?",
        ans1: "Mjölnir",
        ans2: "Stormbreaker",
        ans3: "Godslayer",
        ans4: "Hofund",
        correct: "1"
    },
    {
        question: "Which movie, starring Jesse Eisenberg and Andrew Garfield, was based on Mark Zuckerberg's, Facebook?",
        ans1: "The Circle",
        ans2: "The Social Network",
        ans3: "Searching",
        ans4: "The Great Hack",
        correct: "2"
    },
    {
        question: "Which Quentin Tarantino movie was the third biggest rated earner of 1994?",
        ans1: "Reservoir Dogs",
        ans2: "Kill Bill: Volume 1",
        ans3: "Pulp Fiction",
        ans4: "Jackie Brown",
        correct: "3"
    },
    {
        question: "Which 1966 musical won the Academy Award for the Best Picture?",
        ans1: "Doctor Zhivago",
        ans2: "Ship of Fools",
        ans3: "Darling",
        ans4: "The Sound of Music",
        correct: "4"
    },
    {
        question: "What is the most popular Christmas film ever?",
        ans1: "The Grinch",
        ans2: "Home Alone",
        ans3: "A Christmas Carol",
        ans4: "Elf",
        correct: "1"
    },
    {
        question: "Which Alfred Hitchcock thriller is notorious for its shocking ‘shower scene’?",
        ans1: "Vertigo",
        ans2: "To Catch a Thief",
        ans3: "Psycho",
        ans4: "Shadow of a Doubt",
        correct: "3"
    },
    {
        question: "Who played detective Rick Deckard in Blade Runner?",
        ans1: "Ryan Gosling",
        ans2: "River Phoenix",
        ans3: "Sean Patrick Flanery",
        ans4: "Harrison Ford",
        correct: "4"
    },
    {
        question: "How many Oscars has Meryl Streep won?",
        ans1: "1",
        ans2: "3",
        ans3: "2",
        ans4: "6",
        correct: "2"
    },
    {
        question: "Who plays the Prime Minister in Love Actually?",
        ans1: "Andrew Lincoln",
        ans2: "Hugh Grant",
        ans3: "Liam Neeson",
        ans4: "Colin Firth",
        correct: "2"
    },
    {
        question: "Who directed Titanic, Avatar and The Terminator?",
        ans1: "James Cameron",
        ans2: "Stephen Spielberg",
        ans3: "Wes Anderson",
        ans4: "Martin Scorsese",
        correct: "1"
    },
    {
        question: "Which movie was incorrectly announced as the winner of Best Picture at the 2017 Academy Awards, during the greatest Oscars flub of all time?",
        ans1: "Moonlight",
        ans2: "Lion",
        ans3: "La La Land",
        ans4: "Arrival",
        correct: "3"
    },
    {
        question: "What was the first feature-length animated movie ever released?",
        ans1: "The Tale of the Fox",
        ans2: "The Seven Ravens",
        ans3: "Gulliver’s Travels",
        ans4: "Snow White and the Seven Dwarfs",
        correct: "4"
    }
];

//variables to select elements
const playButton = document.getElementById('play-btn');
const homeSection = document.getElementById('home-section');
const quizSection = document.getElementById('quiz-game-section');

const question = document.getElementById('question');
const answers = Array.from(document.querySelectorAll('.ans-btn'));
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progress-bar-full');

//variables for quiz game

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const SCORE_POINTS = 10;
const MAX_QUESTIONS = 20;

playButton.addEventListener('click', startQuiz);

function startQuiz() {

    homeSection.classList.add('hide');
    quizSection.classList.remove('hide');
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    renderQuestion();

}

function renderQuestion() {

    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return $("#finish-quiz-modal").modal("show"); 
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    answers.forEach(ans => {
        const number = ans.dataset['number'];
        ans.innerText = currentQuestion['ans' + number];
    })

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

answers.forEach(ans => {
    ans.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.correct ? 'btn-correct' : 'btn-incorrect';

        if(classToApply === 'btn-correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            renderQuestion();

        }, 1000)
    })
})

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

//end quiz modal section

const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('save-score');
const finalScore = document.getElementById('final-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const playAgainBtn = document.getElementById('play-again');
const returnHomeBtn = document.getElementById('return-home');

const highScores = (JSON.parse(localStorage.getItem('highScores')) || []);

const MAX_HIGH_SCORES = 10;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(10)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}

playAgainBtn.addEventListener('click', () => {
    $("#finish-quiz-modal").modal("hide"); 
    startQuiz();
})

//highscores modal section

const highScoresList = document.getElementById('high-scores-list');
// const highScores = (JSON.parse(localStorage.getItem('highScores')) || [])

highScoresList.innerHTML = 
highScores.map(score => {
    return `<tr class="select">
    <td>${score.name}</td>
    <td>${score.score}</td>
    </tr>`;
})
.join('')

//clear highscores modal section

const clearBtn = document.getElementById('clear-scores');
const clearYesBtn = document.getElementById('cs-yes');
const clearNoBtn = document.getElementById('cs-no');

clearBtn.addEventListener('click', () => {
    $("#clear-modal").modal("show");
    $("#highscores-modal").modal("hide");
})

clearYesBtn.addEventListener('click', () => {
    localStorage.removeItem('highScores');
    highScoresList.style.display = "none";
    $("#highscores-modal").modal("show");
})

clearNoBtn.addEventListener('click', () => {
    $("#highscores-modal").modal("show");
})


// //function to display question and answer choices
// function renderQuestion() {

//     let q = questions[runningQuestion];

//     question.innerHTML = "<p>" + q.question + "</p>";
//     ans1.innerHTML = q.ans1;
//     ans2.innerHTML = q.ans2;
//     ans3.innerHTML = q.ans3;
//     ans4.innerHTML = q.ans4;

//     //increase question count and update progress bar after each question
//     questionCount++;
//     progressText.innerText = `Question ${questionCount} of ${MAX_QUESTIONS}`
//     progressBarFull.style.width = `${(questionCount/MAX_QUESTIONS) * 100}%`

// }

// //function to randomise the questions in the quiz game
// // function generateRandom() {

// //     let randomQuestion = Math.floor(Math.random() * questions.length);
// //     currentQuestion = randomQuestion;
// //     runningQuestion = questions[randomQuestion];

// //     if (!questionTracker.includes(runningQuestion)) {
// //         questionTracker.push(runningQuestion);
// //     } else {
// //         generateRandom();
// //     }
// //     return runningQuestion;

// // }

// //event listener to run quiz function
// playButton.addEventListener('click', startQuiz);

// //function executed once user starts the quiz game
// function startQuiz() {

//     homeSection.classList.add('hide');
//     quizSection.classList.remove('hide');
//     resetStatistics();
//     renderQuestion();

// }

// //function to check the answer that user has selected
// function checkAnswer(answer) {

//     if (answer == questions[runningQuestion].correct) {
//         incrementScore();
//         answerCorrect();
//     } else {
//         answerIncorrect();
//     }

//     if (questionCount < MAX_QUESTIONS) {
//         runningQuestion++
//         renderQuestion();
//     } else {
//         endQuiz();
//     }

// }

// //function to update the score
// function incrementScore() {

//     let userScore = parseInt(document.getElementById('score').innerText);
//     document.getElementById('score').innerText = userScore+=10;

// }

// //function if user selects correct answer
// function answerCorrect() {

//     console.log('Correct');

// }

// //function if user selects incorrect answer
// function answerIncorrect() {

//     console.log('Wrong');

// }

// //function once user finished the quiz
// function endQuiz() {

//     console.log('Ended');
//     $("#finish-quiz-modal").modal("show");
//     finalScore.innerText = userScore;




// }

// //event listener to restart quiz 
// playAgain.addEventListener('click', restartQuiz);

// //function to restart the quiz
// function restartQuiz() {

//     $("#finish-quiz-modal").modal("hide");
//     startQuiz();

// }

// //event listener to go back to home page
// returnHome.addEventListener('click', returnHomePage);

// //function to return user back to home page after quiz has ended
// function returnHomePage() {

//     $("#finish-quiz-modal").modal("hide");
//     homeSection.classList.remove('hide');
//     quizSection.classList.add('hide');

// }

// //function to reset the score and question count
// function resetStatistics() {

//     runningQuestion = 0;
//     questionCount = 0;
//     userScore = 0;

// }


