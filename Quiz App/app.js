const quizData = [
    {
        question:`In which Italian city can you find the Colosseum?`,
        a:`Venice`,
        b:`Rome`,
        c:`Naples`,
        d:`Milan`,
        e:`Palermo`,
        correct:`b`
    },
    {
        question:`In which museum can you find Leonardo Da Vinci’s Mona Lisa?`,
        a:`Le Louvre`,
        b:`Uffizi Museum`,
        c:`British Museum`,
        d:`Metropolitan Museum of Art`,
        e:`Warsaw National Museum`,
        correct:`a`
    },
    {
        question:`When did Hitler invade Poland?`,
        a:`8th May 1940`,
        b:`11th November 1939`,
        c:`1st September 1939`,
        d:`1st December 1940`,
        e:`19th July 1941`,
        correct:`c`
    },
    {
        question:`What is the largest continent in size?`,
        a:`Asia`,
        b:`Africa`,
        c:`Europe`,
        d:`North America`,
        e:`South America`,
        correct:`a`
    },
    {
        question:`Which country does not share a border with Romania?`,
        a:`Ukraine`,
        b:`Bulgaria`,
        c:`Hungary`,
        d:`Poland`,
        e:`Serbia`,
        correct:`d`
    }
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl= document.getElementById("question")
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]

    deselectAnswers()

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz<quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `<h2>Quiz Completed, you got ${score * 20} points.<h2>
            <button class="submit" onClick="location.reload()"> Try Again </button>`
        }
    }
})
