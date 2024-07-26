import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom' //dùng để dịch chuyển DOM đến 1 nơi nhất định trong file html

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {

    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formarttedRemainingTime = (remainingTime / 1000).toFixed(2)
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {     //hook này ko thường xuyên đc sử dụng, có 2 đối số là ref và 1 function, return về 1 object
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your score: {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formarttedRemainingTime} seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>,//dialog là 1 element của HTML native, khi ta dùng form mà dùng attribute method dialog, ta có thể dùng button để đóng dialog
        document.getElementById('modal')
    );
})

export default ResultModal;