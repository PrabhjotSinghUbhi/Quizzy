const questionAnswer = [
    {
        question: "Which is largest animal in the world",
        options: ["Shark", "Blue Whale", "Elephant", "Giraffe"],
        answer: "Blue Whale"
    },
    {
        question: "Which is the smallest country in the world?",
        options: ["Vatican City", "Bhutan", "Nepal", "Sri Lanka"],
        answer: "Vatican City"
    },
    {
        question: "Which is the largest Desert in the world?",
        options: ["Kalahari", "Gobi", "Sahara", "Antarctica"],
        answer: "Antarctica"
    },
    {
        question: "Which is the smallest continent in the world",
        options: ["Asia", "Australia", "Arctic", "Africa"],
        answer: "Arctic"
    }
]

const opt = ['A', 'B', 'C', 'D']

const optionContainer = document.getElementById('optionContainer')
const questionSpan = document.getElementById('question')
const questionNoSpan = document.getElementById('qNo')
const nextBtn = document.getElementById('next')
const questionDiv = document.querySelector('.questionDiv')

let currentIndex = 0
let score = 0
function startQuiz() {
    currentIndex = 0
    score = 0
    showQuestionAndOptions(currentIndex)
}

optionContainer.addEventListener('click', (e) => {
    let listElement = e.target.closest('.listElement')
    if (listElement) {
        let chosen = listElement.querySelector('.optionText').textContent
        if (chosen === questionAnswer[currentIndex].answer) {
            score += 1
            console.log("score: ", score);
            listElement.classList.add("bg-green-500")
        } else {
            listElement.classList.add("bg-red-500")
        }
    }
    currentIndex += 1
    optionContainer.classList.add("pointer-events-none")
})

nextBtn.addEventListener('click', (e) => {
    optionContainer.innerHTML = ''

    if (currentIndex < questionAnswer.length) {
        optionContainer.classList.remove('pointer-events-none')
        showQuestionAndOptions(currentIndex)
    }

    else if (currentIndex === questionAnswer.length) {
        questionDiv.innerHTML = ''
        optionContainer.innerHTML = `you scored ${score} out of ${questionAnswer.length}`
        optionContainer.classList.add('text-center', 'font-semibold', 'text-2xl','mb-4')
        nextBtn.remove()
    }
    else {
        return
    }
})

function showQuestionAndOptions(index) {
    questionSpan.textContent = questionAnswer[index].question
    questionNoSpan.textContent = `${index + 1}. `
    questionAnswer[index].options.forEach((option, index) => {
        let taskDiv = document.createElement('li')
        taskDiv.classList.add("listElement", "border", "hover:bg-slate-800", "rounded-full", "p-1", "w-[80%]", "mx-auto", "cursor-pointer")
        taskDiv.innerHTML = `
            <article class="flex items-center ">
                <div class="w-[50px] h-[50px] flex items-center justify-center border  font-bold rounded-full">
                        ${opt[index]}
                </div>
                <div class="optionText ml-2.5 options">${option}</div>
            </article>
        `
        optionContainer.appendChild(taskDiv)
    })
}

startQuiz()