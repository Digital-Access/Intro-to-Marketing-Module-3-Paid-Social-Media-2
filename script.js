let titleScreen = 'Multiple Choice Quiz';
let allQuestions = [{
    question_string: "Which colour isn't the sky",
    correct_text: "✔ Correct! The sky doesn't contain shades of green.",
    incorrect_text: "❌Incorrect! The colour the sky doesn't contain is green.",
    choices: {
        all_choices: ["Pink", "Blue", "Orange", "Green"],
        correct: "Green",
    }
}, {
    question_string: "Which of the following elements aren’t introduced in HTML5?",
    correct_text: "✔ Correct! <hgroup> is not included in HTML5.",
    incorrect_text: "❌Incorrect! <hgroup> is the element not introduced in HTML5.",
    choices: {
        all_choices: ["<hgroup>", "<article>", "<footer>", "<input>"],
        correct: "<hgroup>",
    }
}, {
    question_string: "How many wheels are there on a tricycle?",
    correct_text: "✔ Correct! Tri is a combining noun, meaning three; having three.",
    incorrect_text: "❌Incorrect! A tricycle has three wheels.",
    choices: {
        all_choices: ["Four", "One", "Two", "Three"],
        correct: "Three",
    }
}, {
    question_string: 'Who is the main character of Harry Potter?',
    correct_text: "✔ Correct! Harry is the protagonist.",
    incorrect_text: "❌Incorrect! Harry Potter is the main character (hint: It says it in the title).",
    choices: {
        all_choices: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Voldemort"],
        correct: "Harry Potter",
    }
}, {
    question_string: 'Whats 3X4?',
    correct_text: "✔ Correct! 3X4 is 12.",
    incorrect_text: "❌Incorrect! 12 is the correct answer.",
    choices: {
        all_choices: ["7", "11", "22", "12"],
        correct: "12",
    }
}];


const question = document.getElementById('question');

const mainContainer = document.getElementById('mainContainer');
const choiceContainer = document.getElementById('choices');
const choice = document.getElementById('choice');
const choices = document.querySelectorAll('.choice')

const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const choice4 = document.getElementById('choice4');

question.textContent = allQuestions[0].question_string;
choice1.textContent = allQuestions[0].choices.all_choices[0];
choice2.textContent = allQuestions[0].choices.all_choices[1];
choice3.textContent = allQuestions[0].choices.all_choices[2];
choice4.textContent = allQuestions[0].choices.all_choices[3];

const nextBtn = document.getElementById('next');
const resultCheck = document.getElementById('resultCheck');
const tryAgain = document.getElementById('tryAgain');
const counterContainer = document.getElementById('counterContainer');
const score = document.getElementById('score');
const counter = document.getElementById('counter');
const endScore = document.getElementById('endScore');
const title = document.getElementById('title');
const titleContainer = document.getElementById('titleContainer');
const header = document.getElementById('header');
const start = document.getElementById('start');
const endComment = document.getElementById('endComment');
const navigation = document.getElementById('navigation');

title.textContent = titleScreen;

let i = 0;
let count = allQuestions.length;

counter.textContent = count;
header.style.display = 'none';
choiceContainer.style.display = 'none';

const beginQuiz = () => {
    titleContainer.style.display = 'none';
    mainContainer.style.justifyContent = 'top!important';
    header.style.display = 'flex';
    choiceContainer.style.display = 'flex';
}

start.addEventListener('click', beginQuiz)

endScore.style.display = 'none';
nextBtn.style.display = 'none';

nextBtn.onclick = () => {
    resultCheck.style.pointerEvents = 'all';
    resultCheck.style.display = 'none';
    nextBtn.style.display = 'none';

    choices.forEach(element => {
        element.classList = 'choice';
        element.style.pointerEvents = 'all';
    })

    if (i < count - 1) {
        i++;
        question.textContent = allQuestions[i].question_string;
        choice1.textContent = allQuestions[i].choices.all_choices[0];
        choice2.textContent = allQuestions[i].choices.all_choices[1];
        choice3.textContent = allQuestions[i].choices.all_choices[2];
        choice4.textContent = allQuestions[i].choices.all_choices[3];
    } else {
        nextBtn.style.display = 'none';
        choices.forEach(element => {
            element.style.pointerEvents = 'none';
            element.style.display = 'none';
        })
        tryAgain.style.display = 'flex';
        question.textContent = 'Your Score';
        endScore.style.display = 'flex';
        endScore.textContent = `${score.textContent} / ${counter.textContent}`;
        counterContainer.style.display = 'none';
        choiceContainer.style.justifyContent = 'center';
        navigation.style.justifyContent = 'center';
        let mark = Number(score.textContent) / count * 100;
        if (mark >= 90) {
            console.log("Incredible!")
            endComment.textContent = "Incredible!"
        } else if (mark >= 70) {
            console.log("Well Done!")
            endComment.textContent = "Well Done!"
        } else if (mark >= 60) {
            console.log("Well Tried!")
            endComment.textContent = "Well Tried!"
        } else if (mark >= 40) {
            console.log("You can do better!")
            endComment.textContent = "You can do better!"
        } else if (mark >= 0) {
            console.log("Please click try again...")
            endComment.textContent = "Please click try again..."
        }
    }
};

let s = 1;
score.textContent = 0;

const checkAnswer = () => {
    resultCheck.style.pointerEvents = 'all'
    nextBtn.style.display = 'flex';
    choices.forEach(element => {
        if (element.classList[1] === 'selected') {

            if (element.textContent === allQuestions[i].choices.correct) {
                score.textContent = s++;
                element.textContent = allQuestions[i].correct_text;
                element.classList.add('correct');
                choices.forEach(element => {
                    element.style.pointerEvents = 'none'
                })
                resultCheck.style.pointerEvents = 'none'
            } else {
                element.textContent = allQuestions[i].incorrect_text;
                element.classList = 'incorrect';
                choices.forEach(element => {
                    element.style.pointerEvents = 'none';
                    if (element.textContent === allQuestions[i].choices.correct) {
                        element.classList.add('correct');
                    }
                })
                resultCheck.style.pointerEvents = 'none';

            }
        }
    });

}

resultCheck.addEventListener('click', checkAnswer);

const selectAnswer = () => {
    choice1.classList.add('selected');
    choice2.classList.remove('selected');
    choice3.classList.remove('selected');
    choice4.classList.remove('selected');
    resultCheck.style.display = 'flex';
}
choice1.addEventListener('click', selectAnswer);

const selectAnswer2 = () => {
    choice2.classList.add('selected');
    choice1.classList.remove('selected');
    choice3.classList.remove('selected');
    choice4.classList.remove('selected');
    resultCheck.style.display = 'flex';
}
choice2.addEventListener('click', selectAnswer2);

const selectAnswer3 = () => {
    choice3.classList.add('selected')
    choice2.classList.remove('selected')
    choice1.classList.remove('selected')
    choice4.classList.remove('selected')
    resultCheck.style.display = 'flex';
}
choice3.addEventListener('click', selectAnswer3);

const selectAnswer4 = () => {
    choice4.classList.add('selected')
    choice2.classList.remove('slected')
    choice3.classList.remove('selected')
    choice1.classList.remove('selected')
    resultCheck.style.display = 'flex';
}
choice4.addEventListener('click', selectAnswer4);

const reset = () => {
    window.location.reload();
}
tryAgain.addEventListener('click', reset);
