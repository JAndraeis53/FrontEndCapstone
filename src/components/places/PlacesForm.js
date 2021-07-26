import React, { useContext, useEffect, useState } from "react" 
import { useHistory } from "react-router"
import { TaskContext } from "./TaskProvider"
import "./Task.css"
import { useParams } from "react-router-dom"

export const TaskForm = () => {
    const { addTasks, updateTask, getTasks, getTaskById} = useContext(TaskContext)
    
    const [task, setTasks] = useState({
        name: "",
        date: "",
    });

    const [isLoading, setIsLoading] = useState(true)
    const { taskId } = useParams()
    const history = useHistory(); 
    
    const handleControlledInputChange = (event) => {
        const newTask = { ...task } 
        let selectedVal = event.target.value 

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
           }
            newTask[event.target.id] = selectedVal
            setTasks(newTask)
    }

          
    const handleClickSaveTask = (event) => {
        event.preventDefault() 
            if (task.name === "" || task.date === "") {
                window.alert("Please fill in all fields")
            
            } else {
                setIsLoading(true);
                
            } if  (taskId){
                updateTask({
                    id: taskId,
                    name: task.name,
                    date: task.date,
                    isComplete: task.isComplete,
                    userId: task.userId
                    
                })
                .then(() => history.push("/tasks"))
            } else {
                    addTasks({
                        id: taskId,
                        name: task.name,
                        date: task.date,
                        isComplete: false,
                        userId: parseInt(sessionStorage.getItem("nutshell_user"))
                    })
                    .then(() => history.push("/tasks"))
                }

            }
            
            useEffect(() => {
                getTasks().then(() => {
                    if (taskId) {
                        getTaskById(taskId)
                        .then( task => {
                            setTasks(task)
                            setIsLoading(false)
                        })
                    } else {
                        setIsLoading(false)
                    }
                })
            }, [])

        return(
        <form className="taskForm"> 
            <h2 className="taskForm__Title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Task Name</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Task Name" value={task.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Task date</label>
                    <input type="date" id="date" required autoFocus className="form-control" placeholder="Task Date" value={task.date} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button className="btn btn-primary" disabled={isLoading} onClick={handleClickSaveTask}>
                Save Task
            </button>
        </form>
    )

}

