import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {

    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formarttedRemainingTime = (remainingTime / 1000).toFixed(2)

    useImperativeHandle(ref, () => {     //hook này ko thường xuyên đc sử dụng, có 2 đối số là ref và 1 function, return về 1 object
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return (
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You lost</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formarttedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>//dialog là 1 element của HTML native, khi ta dùng form mà dùng attribute method dialog, ta có thể dùng button để đóng dialog
    );
})

export default ResultModal;