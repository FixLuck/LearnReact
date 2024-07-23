import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChanllenge({ title, targetTime }) {

    const timer = useRef(); //ko như khai báo biến thông thường trong react, ref sẽ ko bị reset 
                             //hoặc bị clear khi re-render component, React sẽ lưu trữ value của ref ở đằng sau và làm nó ko bị mất đi
    const dialog = useRef();

    // const [timerExpired, setTimerExpired] = useState(false)

    // const [timerStarted, setTimerStarted] = useState(false)

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000); //set targetTime làm giá trị khởi tạo của state

    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000; //vì targetTime đc set theo second nên cần đc nhân với 1000

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open(); //hết thời gian chạy thì sẽ mở modal
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000)
    }

    
    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10); 

            // setTimerExpired(true);
            // dialog.current.open();
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open(); //mở modal khi click vào stop
    }


    return (
        <>
            <ResultModal 
                ref={dialog} 
                targetTime={targetTime} 
                remainingTime={timeRemaining}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timeIsActive ? handleStop : handleStart}>
                        {timeIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timeIsActive ? 'active' : undefined}>
                    {timeIsActive ? "Time is running..." : "Timer inative"}
                </p>
            </section>
        </>
    );
}