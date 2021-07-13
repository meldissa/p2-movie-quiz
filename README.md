# Movie Quiz

[View published site on GitHub Pages](https://meldissa.github.io/p2-movie-quiz/)

## Project Overview

Movie Quiz is a website that aims to provide entertainment and a fun challenge to the user with a quiz game. This site has been created as part of my Portfolio Project 2 for Code Institute.

## Table of Contents

1. [User Experience (UX)](#ux)
    * [Strategy](#strategy)
        * [Project Goals](#project-goals)
        * [User Stories](#user-stories)
    * [Scope](#scope)
    * [Design](#design)
        * [Colors](#colors)
        * [Typography](#typography)
        * [Imagery](#imagery)
    * [Skeleton](#skeleton)
        * [Wireframes](#wireframes)
2. [Features](#features)
    * [Current Features](#current-features)
    * [Future Features](#future-features)
3. [Technologies Used](#tech-used)
4. [Testing](#testing)
    * [User Stories Testing](#user-testing)
    * [Validation Testing](#validation-testing)
5. [Deployment](#deployment)
6. [Credits](#credits)
7. [Acknowledgements](#acknowledgements)

## User Experience (UX) <a name="ux"></a>

## Strategy <a name="strategy"></a>

### Project Goals <a name="project-goals"></a>

The main business goal for Movie Quiz is to provide a fun challenge to the user via a quiz game. The site will test the user’s knowledge across 20 different questions in relation to popular movies and film. The user will also be able to receive an end score based on how many questions they answered correctly, with the opportunity to replay the quiz.

The main target audience for this website are games/quiz lovers with an extended interest in movies and film. This quiz game will allow the user to test their knowledge in a fun and entertaining manner.

### User Stories <a name="user-stories"></a>

* __Site User Goals:__

    * I want to want to play an online quiz to test my knowledge on movies.
    * I want to easily locate the rules of the game and understand how to play the quiz game.
    * I want to see my progress whilst playing the quiz game.
    * I want to track my score during the quiz game of how many points I have.
    * I want to view my final score after quiz game has ended and to save this.
    * I want to replay the quiz game.
    * I want to view the highscores table of previously saved scores.
    * I want to clear the highscores to reset the table.
    * I want to have the option to quit the quiz game without finishing it.

* __Site Owner Goals:__

    * I want to provide a challenging quiz to entertain online users.
    * I want users to easily navigate through the site and game without encountering much difficulty.
    * I want users to return and replay the quiz.
    * I want users to record highscores to give incentive to return to replay the game to improve the score.


## Scope <a name="scope"></a>

To achieve the strategy goals, I want to implement the following features:

* A Home page section, which will allow users to start the quiz game, to view the rules of the game, and view the highscores table of previously saved scores (if any).
* A Quiz Game section, which users can access once the game is started, the user is able to view the questions and available options which they can select to progress the quiz.
* A feature which lets the user know is selected answer is correct or incorrect, correct will turn the answer green and incorrect will turn the answer red.
* A score tracker during the quiz game, which allows the user to see their current score and this changes depending if the question answered is correct.
* A progress feature during the quiz game, which allows the user to see how many questions have been answered out of the total questions and a progress bar for additional visual aspect.
* An End Quiz section, which notifies the user that the quiz game is finished and displays the final score, the user has also an option to save the score and return to the home page, or replay quiz or return back to the home page without saving the score.
* A Highscores section, which displays previously recorded scores to the user (top 10) noting the username and the score next to it, also allowing user to clear the table of all previously recorded scores.
* A fully responsive design that will work on different devices including desktop, tablets, and mobile devices, allowing users to access the site anytime and anywhere.

## Design <a name="design"></a>

### Colours <a name="colors"></a>

The following colours have been used for the website:

* #fff
* #c20047
* #ffbb59
* black

These four main colours have been picked to compliment the main background image used for the website. I have also kept the colour choices simple and cohesive, to not overwhelm the user and keep the focus on the main content of the website.

### Typography <a name="typography"></a>

The fonts were obtained from [Google Fonts](https://fonts.google.com/).

For my logo text and heading I have used Luckiest Guy.

For the main text I have selected Open Sans which complements the Luckiest Guy font used for my headings and logo. 

I have avoided using overly stylised fonts, which can be difficult to read for users, therefore ensuring the website is more accessible to users with visual impairments.

In the event the font fails to load, I have used sans-serif as a back-up font.

### Imagery <a name="imagery"></a>

Images are obtained from the [Freepik](https://www.freepik.com/) website.

I have used imagery appropriate to the website’s content to provide a more visual experience to the user.

Please see further details in the __Credits__ section for the specific images used within the project.

## Skeleton <a name="skeleton"></a>

### Wireframes <a name="wireframes"></a>

Wireframes were created using [Balsamiq Wireframes](https://www.balsamiq.com/).

The wireframes have examples of desktop, tablet, and mobile phone displays.

* [Movie Quiz Wireframe]()

## Features <a name="features"></a>

### Current Features <a name="current-features"></a>

For this project I opted for a single page website, this is fully responsive and consists of a home section, quiz game section and the following modal sections: rules, highscores, finish quiz, clear scores, play again and return home.

__Home__: 

The Home section consists of content which provides the user an introduction of why posture matters, then proceeds to list the benefits of good posture and common posture mistakes. For the latter two sections I have used the Font Awesome icons and applied CSS style to add color to display the benefits in green and mistakes in red. This provides the user with further visual guidance on what these sections represent. I have kept the content simple and minimal, so this does not overwhelm the user with too much information.

### Future Features <a name="future-features"></a>

Due to time constraints, I was unable to apply additional features, in the future I would like to implement the following:

* Add more categories to the quiz to allow the user to shuffle between different categories and questions to test their knowledge on wider range of topics. For example, make specific categories for the movies such as animated, action, horror etc.
* Add a timer element to the quiz to give the user a set timeframe to answer the question displayed.

## Technologies Used <a name="tech-used"></a>

For this project the main languages used are __HTML5__, __CSS3__ and __JavaScript__.

I have also utilised the following frameworks, libraries, and tools:

* [Bootstrap v5.0.2](https://getbootstrap.com/): 
    * Bootstrap has been used for overall responsiveness of the website, and for the layout to include navigation, carousel, featurette, and forms within the relevant sections of the website.
* [jQuery](https://jquery.com/):
    * jQuery was used for additional function to display the modal sections in this project.
* [GitPod](https://www.gitpod.io/): 
    * I used GitPod as the IDE for this project and Git has been used for Version Control.
* [GitHub](https://www.github.com/): 
    * GitHub has been used to create a repository to host the project and receive updated commits from GitPod.
* [Balsamiq](https://balsamiq.com/): 
    * I used Balsamiq to create the wireframe for the website for the basic structure and layout.
* [Flaticon](https://www.flaticon.com/): 
    * I used Flaticon website to obtain the favicon image used for this project.
* [Freepik](https://www.freepik.com/): 
    * Freepik has been used for copyright free images for this project.
* [Google Fonts](https://getbootstrap.com/): 
    * I have used Google Fonts to import fonts for styling purposes for this project.
* [GIMP v2.10](https://www.gimp.org/): 
    * GIMP image manipulator program was used to change contrast for the background image used this project.
* [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools): 
    * Chrome Dev Tools was used to test the site, assist with debugging issues and run reports from Lighthouse.
* [W3C Markup Validation Service](https://validator.w3.org/): 
    * The W3C Markup Validation Service was used to validate the HTML document for this project and to identify any issues with the code.
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/): 
    * The W3C CSS Validation Service was used to validate the CSS document for this project and to identify any issues with the code.
* [JSHint Validation Service](https://jshint.com/): 
    * The JSHint Validation Service was used to validate the JavaScript document for this project and to identify any issues with the code.
* [Color Contrast Accessibility Validator](https://color.a11y.com/):
    * This was used to test the color contrast accessibility for this project.
* [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/):
    * WAVE was used to test the accessibility for this project.
* [Am I Responsive](http://ami.responsivedesign.is/):
    * Am I Responsive was used to create the header image for the README file.

## Testing <a name="testing"></a>

### User Stories Testing <a name="user-testing"></a>

### Validation Testing <a name="validation-testing"></a>

## Deployment <a name="deployment"></a>

The project was developed using GitPod and was deployed via the GitHub repository to GitHub Pages.

The following steps were followed to deploy this project:

1. Select 'Settings' from the GitHub repository.
2. Select 'Pages' from the options available on the left-hand side.
3. In the GitHub Pages section, under the 'Source', select 'master' from the dropdown.
4. This will change the branch to 'master', then click 'Save' and this will generate the URL.
5. Refresh the page and the site is published and ready to use.
6. Click on the URL for and confirm it has been published.

__Clone Project__:

1. Select the 'Repository' for the project from the GitHub dashboard.
2. Click on the 'Code' button.
3. From the dropdown:
    * To clone the repository using HTTPS, under "Clone with HTTPS", click the copy icon next to the link. 
    * To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the copy icon next to the link.
    * To clone a repository using GitHub CLI, click Use GitHub CLI, then click the copy icon next to the link.
4. Open Terminal.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier.
7. Press Enter to create your local clone.

__Run Project Locally__:

1. Select the 'Repository' for the project from the GitHub dashboard.
2. Click the 'Code' button, and from the dropdown select 'Download ZIP'.
3. Extract the downloaded ZIP file on your computer.
4. Open the folder with the files and proceed to open the 'index.html' file in the web browser.

## Credits <a name="credits"></a>

### Content

The quiz questions used for this project were obtained from the following sources:

* [kindadl](https://kidadl.com/articles/easy-movie-trivia-questions-and-answers-for-family-movie-night)
* [parade](https://parade.com/977752/samuelmurrian/movie-trivia/)
* [dailyrecord](https://www.dailyrecord.co.uk/lifestyle/100-movie-tv-quiz-questions-23212715)

### Media

The images used for this project were obtained from the following sources:

* Background Image - from [Freepik](https://img.freepik.com/free-photo/stylish-arrangement-popcorn-tickets_23-2147807342.jpg?size=626&ext=jpg)
* Favicon Image - from [Flaticon](https://image.flaticon.com/icons/png/512/1038/1038100.png)

### Code

* The script.js document was created using the following tutorial on [YouTube](https://www.youtube.com/watch?v=f4fB9Xg2JEY&amp;t=3763s&amp;ab_channel=BrianDesignBrianDesign). I have borrrowed code from this tutorial to assist with creating the quiz game. Please note some of the borrowed code has been customised by me to fit this project. I have also added my own code for additional functions for the project.

* [Bootstrap v5.0.2](https://getbootstrap.com/) framework was used in this project to implement certain components for the website:
    * [Grid System](https://getbootstrap.com/docs/5.0/layout/grid/): The grid system was implemented for the overall responsiveness of the website.
    * [Modal](https://getbootstrap.com/docs/5.0/components/modal/): The modal classes were used to create the different sections of this website.
    * [Progress Bar](https://getbootstrap.com/docs/5.0/components/progress/#multiple-bars): The progress bar classes were used for the main quiz game section.
    * [Buttons](https://getbootstrap.com/docs/5.0/components/buttons/): The button classes were used for general styling.
    * [Form](https://getbootstrap.com/docs/5.0/forms/overview/): The form classes were used for general styling.

## Acknowledgements <a name="acknowledgements"></a>
