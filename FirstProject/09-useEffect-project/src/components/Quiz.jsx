import { useState } from "react"
import QUESTIONS from "../questions"

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const acticeQuestionIndex = userAnswers.length

    const shuffleAnswers = [...QUESTIONS[acticeQuestionIndex].answers];
    shuffleAnswers.sort(() => Math.random() - 0.5); //shuffle các câu trả lời trc khi render ra view, vì câu trả lời mặc định luôn là đầu tiền

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers(prevUserAnswer => {
            return [
                ...prevUserAnswer,
                selectedAnswer
            ]
        });
    }

    return (
        <div id="quiz">
            <div id='question'>
                <p>{QUESTIONS[acticeQuestionIndex].text}</p>
                <ul id="answers">
                    {shuffleAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}