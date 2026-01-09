import React from 'react'
import { deleteTask, updateTask } from '../../services/api';
import "../../styles/TaskItem.css";

const TaskItem = ({ task, fetchTasks }) => {
    const deleteHandler = async () => {
        await deleteTask(task._id);
        fetchTasks();
    }
    const toggleComplete = async () => {
        await updateTask(task._id, { completed: !task.completed });
        fetchTasks();
    }

    const formattedDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString() : null;
    return (
        <li className={`task-item ${task.completed ? "completed" : ""}`}>
            <div className="task-left" onClick={toggleComplete}>
                <h4 className="task-title">{task.title}</h4>

                {formattedDate && (
                    <p className="task-date">📅 {formattedDate}</p>
                )}
            </div>

            <button className="delete-btn" onClick={deleteHandler}>
                Delete
            </button>
        </li>
    )
}

export default TaskItem