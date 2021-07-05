
//Variable created that user can click to start the game
const playButton = document.getElementById('play-btn');
playButton.addEventListener('click', startQuiz);

//Additional variables for home and quiz sections
const homeSection = document.getElementById('home-section');
const quizSection = document.getElementById('quiz-game-section');

//Function executed once user starts the quiz game
function startQuiz() {
    //Hide class applied to homeSection to remove display
    homeSection.classList.add('hide');
    //Hide class removed for quizSection to display the game section
    quizSection.classList.remove('hide');
}