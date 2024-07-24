
export default function ProjectForm() {
    return (
        <div className="flex flex-col w-64 mx-auto">
            <div className="flex justify-between align-text-top">
                <div>
                    <h1>Project Title</h1>
                    <h5>Project Date</h5>
                    <h5>Project desc</h5>
                </div>
                <button>Delete</button>
            </div>
            <div>
                <h1>Task</h1>
                <div className="flex justify-between">
                    <input type="text" />
                    <button>Add task</button>
                </div>
                <ul>
                    <li className="flex justify-between">
                        <p>Project task</p>
                        <button>Clear</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}