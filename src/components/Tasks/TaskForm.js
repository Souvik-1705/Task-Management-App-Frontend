import React, { useState } from 'react'
import { addTasks } from '../../services/api';
import "../../styles/Tasks.css";

const TaskForm = ({fetchTasks}) => {
    const[title,setTitle]=useState("");
    const[dueDate,setDueDate]=useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!title || !dueDate){
            return;
        }
        await addTasks({title,dueDate});
        setTitle("");
        setDueDate("");
        fetchTasks();
    }
  return (
    <form onSubmit={handleSubmit} className='task-form'>
        <input placeholder='Title'value={title}onChange={(e)=>setTitle(e.target.value)}/>
        <input type='date'value={dueDate}onChange={(e)=>setDueDate(e.target.value)}/>
        <button type='submit'>Add Task</button>
    </form>
  )
}

export default TaskForm