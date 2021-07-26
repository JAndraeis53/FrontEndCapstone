import React, { useContext } from "react" 
import { useHistory } from "react-router-dom"
import "./Task.css"
import { TaskContext } from "./TaskProvider"

export const TaskCard = ({ task }) => {

    const { deleteTask, updateTask } = useContext(TaskContext)
    const history = useHistory()

    const handleCheckBox = () => {
        updateTask({
            id: task.id, 
            name: task.name,
            isComplete: true,
            userId: task.userId
        })
        .then(() => history.push("/tasks"))
    }


    return (
        <section className="task">
        <section className="taskList" id="taskId">
            <h3 className="task__name">Task: {task.name}</h3>
            <div className="task__date">Date: {task.date}</div>
        </section>
        <div className="taskButtons"> 
            <button onClick={() => { deleteTask(task.id) }}>Delete Task</button>
            <button className="taskButton" onClick={() => {
                history.push(`/tasks/edit/${task.id}`)
            }}>Edit</button>
            <label htmlFor="checkbox">Mark as complete</label>
            <input type="checkbox" id="checkbox" unchecked="" onChange={handleCheckBox} />
        </div>

    </section>
    )
}