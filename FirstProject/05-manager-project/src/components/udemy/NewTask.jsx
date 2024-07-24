import { useState, useRef } from "react"
import ErrorModal from "./ErrorModal";

export default function NewTask({ onAdd }) {

    const modal = useRef();

    const [enteredTask, setEnteredTask] = useState('')

    function handleChange(e) {
        setEnteredTask(e.target.value)
    }

    function handleClick() {
        if (enteredTask.trim() === '') {
            modal.current.open();
            return;
        }
        onAdd(enteredTask)
        setEnteredTask('');
    }

    return (
        <>
            <ErrorModal ref={modal} buttonCaption='Okay'>
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Oops... looks like you forgot to enter task.</p>
                <p className='text-stone-600 mb-4'>Please make sure you provide a valid value input field.</p>
            </ErrorModal>
            <div className="flex items-center gap-4">
                <input
                    type="text"
                    className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                    onChange={handleChange}
                    value={enteredTask} />
                <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
            </div>
        </>
    )
}