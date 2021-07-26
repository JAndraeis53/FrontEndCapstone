import React, { useContext, useEffect } from "react"
import { TaskCard } from "./TaskCard"
import "./Task.css" 
import { TaskContext } from "./TaskProvider"
import { useHistory } from "react-router-dom"

export const TaskList = () => {
    const { tasks, getTasks } = useContext(TaskContext) 
    const history = useHistory()

    useEffect(() => {
        getTasks()
    },[])


    return(
        <>
            <h2>Tasks</h2>
            <button className="taskButtons" onClick={() => {history.push("/tasks/create")}}>
                Add Task
            </button>
            <div className="tasks">
                {/* the "if" statement code inside the .map makes the messages private */}
                {
                    tasks.map(task => { 
                        if (task.isComplete === false) {

                            if(task.userId == sessionStorage.getItem("nutshell_user")){
                                return <TaskCard key={task.id} task={task} />
                            }
                        // else {
                        //     return (null)
                        // }
                        }})
                }
            </div>
        </>
    )
}