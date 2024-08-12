import QuestionTimer from "./QuestionTimer"
import Answer from "./Answer"
import { useState } from "react"
import QUESTION from '../questions'

export default function Question({ onSelectAnswer, onSkipAnswer, questionIndex }) {

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })

    let timer = 10000;
    
    if (answer.selectedAnswer) {
        timer = 1000
    }

    if (answer.isCorrect !== null) {
        timer = 2000
    }

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTION[questionIndex].answers[0] === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer)
            }, 2000)
        }, 1000)
    }

    let answerState = '';
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong'
    } else if (answer.selectedAnswer) {
        answerState = 'answered'
    }

    return (
        <div id='question'>
            <QuestionTimer
                //key={acticeQuestionIndex} //key trong react ngoài tác dụng đánh chỉ mục cho list, nó còn có thể hủy vào tạo lại component
                key={timer}
                timeout={timer}
                onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} 
                mode={answerState}
                />
            <h2>{QUESTION[questionIndex].text}</h2>
            <Answer
                //key={acticeQuestionIndex}
                answers={QUESTION[questionIndex].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    )
}