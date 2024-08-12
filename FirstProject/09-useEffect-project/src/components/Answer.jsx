import { useRef } from "react";
export default function Answer({answers, selectedAnswer, answerState, onSelect}) {

    const shuffleAnswers = useRef();

    if (!shuffleAnswers.current) {
        shuffleAnswers.current = [...answers];
        shuffleAnswers.current.sort(() => Math.random() - 0.5); //shuffle các câu trả lời trc khi render ra view, vì câu trả lời mặc định luôn là đầu tiền
    }

    return (
        <ul id="answers">
            {shuffleAnswers.current.map((answer) => {

                const isSelected = selectedAnswer === answer
                let cssClasses = '';

                if (answerState === 'answered' && isSelected) {
                    cssClasses = 'selected'
                }

                if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClasses = answerState;
                }

                return (
                    <li key={answer} className="answer">
                        <button
                            onClick={() => onSelect(answer)}
                            className={cssClasses}
                            disabled={answerState !== ''}
                        >{answer}</button>
                    </li>
                )
            }
            )}
        </ul>
    )
}