/* This document was created using the following tutorial on YouTube:

https://www.youtube.com/watch?v=f4fB9Xg2JEY&amp;t=3763s&amp;ab_channel=BrianDesignBrianDesign

I have borrrowed code from this tutorial to assist with creating the quiz game.

Please note some of the borrowed code has been customised by me to fit this project.

I have also added my own code for additional functions for the project. */

// Array with list of quiz questions
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
const exitGameButton = document.getElementById('exit-game');
const exitYesBtn = document.getElementById('exit-yes');
const exitNoBtn = document.getElementById('exit-no');
const question = document.getElementById('question');
const answers = Array.from(document.querySelectorAll('.ans-btn'));
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progress-bar-full');
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('save-score');
const finalScore = document.getElementById('final-score');
const playAgainBtn = document.getElementById('play-again');
const returnHomeBtn = document.getElementById('return-home');
const restartYesBtn = document.getElementById('restart-yes');
const restartNoBtn = document.getElementById('restart-no');
const clearBtn = document.getElementById('clear-scores');
const clearYesBtn = document.getElementById('cs-yes');
const clearNoBtn = document.getElementById('cs-no');
const highScoresList = document.getElementById('high-scores-list');

//variables for quiz game

let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestions = [];
let score = 0;
const SCORE_POINTS = 10;
const MAX_QUESTIONS = 20;

//function to render new question

function renderQuestion() {

    //if function to check if the game has ended
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        return $("#finish-quiz-modal").modal("show"); 
    }

    //questions counter increases which updates the progress bar and text
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    //variable created to randomise the questions
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    //function to assign answer boxes with relevant options that correspond to the correct question
    answers.forEach(ans => {
        const number = ans.dataset['number'];
        ans.innerText = currentQuestion['ans' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

//function to check which answer the user has chose
answers.forEach(ans => {
    ans.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        //check if answer is correct or not and set the class
        let classToApply = selectedAnswer == currentQuestion.correct ? 'btn-correct' : 'btn-incorrect';

        //if correct answer chosen then increase score
        if(classToApply === 'btn-correct') {
            incrementScore(SCORE_POINTS);
        }

        //set class to change colour depending on aswer chosen
        selectedChoice.classList.add(classToApply);
        selectedChoice.classList.remove('ans-btn');

        //function to reset the state and render new question
        setTimeout(() => {
            selectedChoice.classList.remove(classToApply);
            selectedChoice.classList.add('ans-btn');
            renderQuestion();

        }, 800);
    });
});

//function to update the user score
incrementScore = num => {
    score +=num;
    scoreText.innerText = score;

    finalScore.innerText = score;
};

//end quiz modal section

// const userScore = localStorage.getItem('userScore');
const highScores = (JSON.parse(localStorage.getItem('highScores')) || []);
const MAX_HIGH_SCORES = 10;

//event listener to allow user to click the save button once username entered
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

//function to save the high score
saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: finalScore.innerText,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(10)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('index.html');
}

//replay quiz game without saving score

//event listener when user clicks the pay again button
playAgainBtn.addEventListener('click', () => {
    $("#play-again-modal").modal("show");
    $("#finish-quiz-modal").modal("hide"); 
});

//event listener if user select yes button
restartYesBtn.addEventListener('click', () => {
    $("#finish-quiz-modal").modal("hide"); 
    scoreText.innerText = 0;
    startQuiz();
});

//event listener if user select no button
restartNoBtn.addEventListener('click', () => {
    $("#finish-quiz-modal").modal("show"); 
});


/* exit quiz game without finishing or 
return to home page without saving score after quiz game is finished */

//variable created to use in if function when user selects 'No'
let clickreturnHomeBtn;

//event listener when user clicks the quit game button
exitGameButton.addEventListener('click', () => {
    $("#exit-modal").modal("show");
});

//event listener when user clicks the return home button
returnHomeBtn.addEventListener('click', () => {
    $("#exit-modal").modal("show");
    $("#finish-quiz-modal").modal("hide");
    clickreturnHomeBtn = true;
});

//event listener if user select yes button
exitYesBtn.addEventListener('click', () => {
    window.location.assign('index.html');
});

//event listener if user select no button
//additional if statement added depending which button user has clicked
exitNoBtn.addEventListener('click', () => {
    if(clickreturnHomeBtn === true) {
        $("#finish-quiz-modal").modal("show");
    } else {
        $("#exit-modal").modal("hide");
    }   
});

//highscores modal section

//highscores added to the table if user saves the score
highScoresList.innerHTML = 
highScores.map(score => {
    return `<tr>
    <td>${score.name}</td>
    <td>${score.score}</td>
    </tr>`;
})
.join('');

//clear highscores modal section

//event listener once user selects clear score button
clearBtn.addEventListener('click', () => {
    $("#clear-modal").modal("show");
    $("#highscores-modal").modal("hide");
});

//event listener once user selects yes to clear score
clearYesBtn.addEventListener('click', () => {
    localStorage.clear('highScores');
    highScoresList.style.display = "none";
    $("#highscores-modal").modal("show");
});

//event listener once user selects no to clear score
clearNoBtn.addEventListener('click', () => {
    $("#highscores-modal").modal("show");
});

//event listener to start the quiz game once clicked
playButton.addEventListener('click', startQuiz);

//function to start the quiz game

function startQuiz() {

    homeSection.classList.add('hide');
    quizSection.classList.remove('hide');
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    renderQuestion();

}