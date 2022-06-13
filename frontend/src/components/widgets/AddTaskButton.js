import "./AddTaskButton.css"

export default function AddTaskButton({onClick}) {
    return(
        <div>
            <button className="add-task-button" onClick={() => onClick()}>
                Add Task
            </button>
        </div>
    )
}