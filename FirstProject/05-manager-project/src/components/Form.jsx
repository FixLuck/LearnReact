import {useRef} from 'react'


export default function Form({list, setList, handleCreate}) {

    const userData = {
        title: '',
        description: '',
        date: ''
    }

    const title = useRef();
    const description = useRef();
    const date = useRef();

    

    

    function saveData() {
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDate = date.current.value

        const newUserData = {
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate
        }
        
        
        setList([...list, newUserData])
        resetForm();
        handleCreate();
    }

    function resetForm() {
        title.current.value = ''
        description.current.value = ''
        date.current.value = ''
        handleCreate();
    }


    return (
        <div className="flex flex-col w-64 mx-auto">
            <div className="">
                <button onClick={resetForm}>Cancel</button>
                <button onClick={saveData}>Save</button>
            </div>
            <div>
                <div className="flex flex-col">
                    <label htmlFor="">Title</label>
                    <input ref={title} type="text" />
                </div >
                <div className="flex flex-col">
                    <label htmlFor="">Description</label>
                    <textarea ref={description} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Due Date</label>
                    <input ref={date} type="date" />
                </div>
            </div>
        </div>
    );
}