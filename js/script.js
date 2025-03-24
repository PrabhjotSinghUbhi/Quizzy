let TOTAL = 3;
let Score = 0;

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

    answers: [1, 0, 2, 2]
}

console.log(questionAnswers);

const question = document.querySelector("#question");
const options = document.querySelectorAll(".options");
const nextBtn = document.getElementById("next");
const qNo = document.getElementById("qNo");
const sectionOption = document.querySelectorAll("li");

let currentQuestion = 0;
nextBtn.disabled = true;

function updateContent() {
    if (currentQuestion < questionAnswers.question.length - 1) {
        currentQuestion += 1;

        qNo.innerHTML = `${currentQuestion + 1}.`;
        question.textContent = questionAnswers.question[currentQuestion];

        options.forEach((element, index) => {
            element.innerHTML = questionAnswers.options[currentQuestion][index];
        });

        // Reset styles using Tailwind classes instead of direct styles
        sectionOption.forEach((element) => {
            element.classList.remove("bg-green-500", "bg-red-500", "text-white");
            element.classList.add("bg-transparent", "dark:bg-black", "hover:bg-slate-800", "cursor-pointer");
            element.style.pointerEvents = "auto";
        });

        nextBtn.disabled = true;
    }
}

// Validate Answer
sectionOption.forEach((element, index) => {
    element.addEventListener("click", () => {
        sectionOption.forEach((el) => el.style.pointerEvents = "none");

        if (questionAnswers.answers[currentQuestion] === index) {
            element.classList.add("bg-green-500", "text-white");
        } else {
            element.classList.add("bg-red-500", "text-white");
            sectionOption[questionAnswers.answers[currentQuestion]].classList.add("bg-green-500", "text-white");
        }

        nextBtn.disabled = false;
    });
});

nextBtn.addEventListener("click", updateContent);
