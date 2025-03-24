let TOTAL = 3;
let Score = 0;

// Object for questions and answers.
const questionAnswers = {
    question: [
        "Which is largest animal in the world",
        "Which is the smallest country in the world?",
        "Which is the largest Desert in the world?",
        "Which is the smallest continent in the world"
    ],

    options: [
        ["Shark", "Blue Whale", "Elephant", "Giraffe"],
        ["Vatican City", "Bhutan", "Nepal", "Sri Lanka"],
        ["Kalahari", "Gobi", "Sahara", "Antarctica"],
        ["Asia", "Australia", "Arctic", "Africa"]
    ],

    // answers: [
    //     "Blue Whale", "Vatican City", "Sahara", "Australia"
    // ]
    answers: [
        1, 0, 2, 2
    ]
}

console.log(questionAnswers);

//variable that contains the question.
const question = document.querySelector("#question")

//The Options.
const options = document.querySelectorAll(".options")//Return a NODE LIST

//The next btn
const nextBtn = document.getElementById("next")
let currentQuestion = 0;

//The Question No.
const qNo = document.getElementById("qNo")

//THE Whole option Section
const sectionOption = document.querySelectorAll("li")

function updateContent() {
    if (TOTAL > 0) {
        currentQuestion += 1;

        //Updating Question No.
        qNo.innerHTML = `${currentQuestion + 1}.`;

        // Updating Question
        question.textContent = questionAnswers.question[currentQuestion];

        // Loading Options.
        options.forEach((element, index) => {
            element.innerHTML = questionAnswers.options[currentQuestion][index]
            console.log(element.innerHTML);
        });
        TOTAL -= 1;

        sectionOption.forEach((element, index) => {
            element.style.pointerEvents = "auto"
            sectionOption[index].style.background = "black"
        })
    }
    console.log();
}

// takes int input.
function validateAnswer(checkAnswer) {
    console.log(checkAnswer);
}

let i = 0;
for (let index = 0; index <= 3; index++) {
    sectionOption[index].addEventListener("click", () => {
        // sectionOption[index].style.display = "none"

        console.log(questionAnswers.answers[i], index)

        sectionOption.forEach((element) => {
            element.style.pointerEvents = "none"
        })

        if (questionAnswers.answers[i] === index) {
            sectionOption[index].style.background = "green"

        } else {
            sectionOption[index].style.background = "red"
            sectionOption[questionAnswers.answers[i]].style.background = "green";
        }
        i += 1;
    })
}

nextBtn.addEventListener("click", updateContent)