//variable created that user can click to start the game
const playButton = document.getElementById('play-btn');
playButton.addEventListener('click', startQuiz);

//variables for home and quiz sections
const homeSection = document.getElementById('home-section');
const quizSection = document.getElementById('quiz-game-section');

//variables for the questions and answer for the quiz game
const questionSection = document.getElementById('question');
const answerButtons = document.getElementById('ans-btn');
let shuffledQuestions, currentQuestionIndex;

//variables for the progress bar and score
const progressBarFull = document.getElementById('progress-bar-full');
const scoreText = document.getElementById('score');

let score = 0;
let questionCounter = 0;

//function executed once user starts the quiz game
function startQuiz() {
    //hide class applied to homeSection to remove display
    homeSection.classList.add('hide');
    //hide class removed for quizSection to display the game section
    quizSection.classList.remove('hide');
    //generates random quiz questions
    shuffledQuestions = question.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    //perform function to show question
    askQuestion();
}

//function executed to ask question in a random order
function askQuestion() {
    //resets to remove the previous question
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

//function executed to show the question
function showQuestion(question) {
    questionSection.innerHTML = question.question;
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
}

//function executed to remove the previous question
function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(button, button.dataset.correct);
    Array.from(answerButton.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('btn-correct');
    } else {
        element.classList.add('btn-incorrect');
    }
}

function clearStatusClass(element) {
    element.classList.remove('btn-correct');
    element.classList.remove('btn-incorrect');
}

//list of quiz questions
const question = [
    {
        question: "What was the name of the first film in the 'Harry Potter' series?",
        answers: [
            {
                text: "Harry Potter and the Order of the Phoenix",
                correct: false
            },
            {
                text: "Harry Potter and the Prisoner of Azkaban",
                correct: false
            },
            {
                text: "Harry Potter and the Philosopher's Stone",
                correct: true
            },
            {
                text: "Harry Potter and the Goblet of Fire",
                correct: false
            }
        ]
    },
    {
        question: "In which movie was the iconic DeLorean time machine originally a refrigerator?",
        answers: [
            {
                text: "Back To The Future",
                correct: true
            },
            {
                text: "Hot Tub Time Machine",
                correct: false
            },
            {
                text: "About Time",
                correct: false
            },
            {
                text: "Land Of The Lost",
                correct: false
            }
        ]
    },
    {
        question: "When adjusted for inflation, which is the highest-grossing movie of all time?",
        answers: [
            {
                text: "Titanic",
                correct: false
            },
            {
                text: "Gone With The Wind",
                correct: true
            },
            {
                text: "Avatar",
                correct: false
            },
            {
                text: "Avengers: Endgame",
                correct: false
            }
        ]
    },
    {
        question: "In which movie did Leonardo DiCaprio have to devour a raw slab of bison's liver, despite being a vegetarian?",
        answers: [
            {
                text: "The Wolf of Wall Street",
                correct: false
            },
            {
                text: "Shutter Island",
                correct: false
            },
            {
                text: "Django Unchained",
                correct: false
            },
            {
                text: "The Revenant",
                correct: true
            }
        ]
    },
    {
        question: "How many 'Star Wars' movies are there?",
        answers: [
            {
                text: "12",
                correct: true
            },
            {
                text: "10",
                correct: false
            },
            {
                text: "9",
                correct: false
            },
            {
                text: "11",
                correct: false
            }
        ]
    },
    {
        question: "For which movie did Tim Burton train 40 squirrels to crack nuts for, rather than use CGI?",
        answers: [
            {
                text: "Alice in Wonderland",
                correct: false
            },
            {
                text: "Charlie and the Chocolate Factory",
                correct: true
            },
            {
                text: "Corpse Bride",
                correct: false
            },
            {
                text: "Edward Scissorhands",
                correct: false
            }
        ]
    },
    {
        question: "The directors of which movie wrote a new language, that the minions speak throughout the movie?",
        answers: [
            {
                text: "Sing",
                correct: false
            },
            {
                text: "The Secret Life of Pets",
                correct: false
            },
            {
                text: "Despicable Me",
                correct: true
            },
            {
                text: "The Lorax",
                correct: false
            }
        ]
    },
    {
        question: "What is the name of the fourth film of the 'Mad Max' series, set in the year 2060?",
        answers: [
            {
                text: "Mad Max",
                correct: false
            },
            {
                text: "Mad Max Beyond Thunderdome",
                correct: false
            },
            {
                text: "Mad Max: The Wasteland",
                correct: false
            },
            {
                text: "Mad Max: Fury Road",
                correct: true
            }
        ]
    },
    {
        question: "In the Avengers movies, what is the name of Thor's hammer?",
        answers: [
            {
                text: "Mjölnir",
                correct: true
            },
            {
                text: "Stormbreaker",
                correct: false
            },
            {
                text: "Godslayer",
                correct: false
            },
            {
                text: "Hofund",
                correct: false
            }
        ]
    },
    {
        question: "Which movie, starring Jesse Eisenberg and Andrew Garfield, was based on Mark Zuckerberg's, Facebook?",
        answers: [
            {
                text: "The Circle",
                correct: false
            },
            {
                text: "The Social Network",
                correct: true
            },
            {
                text: "Searching",
                correct: false
            },
            {
                text: "The Great Hack",
                correct: false
            }
        ]
    },
    {
        question: "Which Quentin Tarantino movie was the third biggest rated earner of 1994?",
        answers: [
            {
                text: "Reservoir Dogs",
                correct: false
            },
            {
                text: "Kill Bill: Volume 1",
                correct: false
            },
            {
                text: "Pulp Fiction",
                correct: true
            },
            {
                text: "Jackie Brown",
                correct: false
            }
        ]
    },
    {
        question: "Which 1966 musical won the Academy Award for the Best Picture?",
        answers: [
            {
                text: "Doctor Zhivago",
                correct: false
            },
            {
                text: "Ship of Fools",
                correct: false
            },
            {
                text: "Darling",
                correct: false
            },
            {
                text: "The Sound of Music",
                correct: true
            }
        ]
    },
    {
        question: "What is the most popular Christmas film ever?",
        answers: [
            {
                text: "The Grinch",
                correct: true
            },
            {
                text: "Home Alone",
                correct: false
            },
            {
                text: "A Christmas Carol",
                correct: false
            },
            {
                text: "Elf",
                correct: false
            }
        ]
    },
    {
        question: "Which Alfred Hitchcock thriller is notorious for its shocking ‘shower scene’?",
        answers: [
            {
                text: "Vertigo",
                correct: false
            },
            {
                text: "To Catch a Thief",
                correct: false
            },
            {
                text: "Psycho",
                correct: true
            },
            {
                text: "Shadow of a Doubt",
                correct: false
            }
        ]
    },
    {
        question: "Who played detective Rick Deckard in Blade Runner?",
        answers: [
            {
                text: "Ryan Gosling",
                correct: false
            },
            {
                text: "River Phoenix",
                correct: false
            },
            {
                text: "Sean Patrick Flanery",
                correct: false
            },
            {
                text: "Harrison Ford",
                correct: true
            }
        ]
    },
    {
        question: "How many Oscars has Meryl Streep won?",
        answers: [
            {
                text: "1",
                correct: false
            },
            {
                text: "3",
                correct: true
            },
            {
                text: "2",
                correct: false
            },
            {
                text: "6",
                correct: false
            }
        ]
    },
    {
        question: "Who plays the Prime Minister in Love Actually?",
        answers: [
            {
                text: "Andrew Lincoln",
                correct: false
            },
            {
                text: "Hugh Grant",
                correct: true
            },
            {
                text: "Liam Neeson",
                correct: false
            },
            {
                text: "Colin Firth",
                correct: false
            }
        ]
    },
    {
        question: "Who directed Titanic, Avatar and The Terminator?",
        answers: [
            {
                text: "James Cameron",
                correct: true
            },
            {
                text: "Stephen Spielberg",
                correct: false
            },
            {
                text: "Wes Anderson",
                correct: false
            },
            {
                text: "Martin Scorsese",
                correct: false
            }
        ]
    },
    {
        question: "Which movie was incorrectly announced as the winner of Best Picture at the 2017 Academy Awards, during the greatest Oscars flub of all time?",
        answers: [
            {
                text: "Moonlight",
                correct: false
            },
            {
                text: "Lion",
                correct: false
            },
            {
                text: "La La Land",
                correct: true
            },
            {
                text: "Arrival",
                correct: false
            }
        ]
    },
    {
        question: "What was the first feature-length animated movie ever released?",
        answers: [
            {
                text: "The Tale of the Fox",
                correct: false
            },
            {
                text: "The Seven Ravens",
                correct: false
            },
            {
                text: "Gulliver’s Travels",
                correct: false
            },
            {
                text: "Snow White and the Seven Dwarfs",
                correct: true
            }
        ]
    }
];