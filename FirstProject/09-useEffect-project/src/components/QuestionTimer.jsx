import { useEffect, useState } from "react";


export default function QuestionTimer({ timeout, onTimeout, mode }) {

    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {
        console.log('SETTING Interval');
        const interval = setInterval(() => {
            setRemainingTime(prev => prev - 100) 
        }, 100);

        return() => {
            clearInterval(interval); //hàm interval ở đây đc chạy 2 lần do react chạy ở strict mode, điều đó cho thấy có bug, và điều cần làm ở đây là
                                     //thêm 1 hàn cleanup function
        }
    }, [])

    useEffect(() => {
        console.log('SETTING TIMEOUT');
        
        const timer = setTimeout(() => {
            onTimeout();
        }, timeout)

        return () => {
            clearTimeout(timer);
        }

    }, [timeout, onTimeout])





    return (
        <progress id="question-time" max={timeout} value={remainingTime} className={mode}/>
    )
}