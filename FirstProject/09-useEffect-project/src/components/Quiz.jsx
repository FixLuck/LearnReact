import { useCallback, useRef, useState } from "react"
import QUESTIONS from "../questions"

import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {

    //const shuffleAnswers = useRef(); //use ref đc sử dụng để quản lý biến shuffle ngoài life-cycle của react, tức là ngăn ngừa việc tạo mới biến này
    const [userAnswers, setUserAnswers] = useState([]);

    const acticeQuestionIndex = userAnswers.length
    const quizIsComplete = acticeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers(prevUserAnswer => {
            return [
                ...prevUserAnswer,
                selectedAnswer
            ]
        });
       
    }, [])

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers}/>
    }


    return (
        <div id="quiz">
            <Question
                key={acticeQuestionIndex}
                questionIndex={acticeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
                />
        </div>
    )
}