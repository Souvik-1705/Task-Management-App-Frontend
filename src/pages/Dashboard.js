import React, { useEffect, useState } from 'react'
import { logout } from '../utils/auth'
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/Tasks/TaskForm';
import { getTasks } from '../services/api';
import TaskList from '../components/Tasks/TaskList';
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  }

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  }

  useEffect(() => {
    fetchTasks()
  }, []);

  return (
    <div className='dashboard'>
      <div className='dashboard-header'>
        <h1>Welcome to TaskFlow</h1>
        <button onClick={handleLogout} className='logout-btn'>Logout</button>
        </div>
        <TaskForm fetchTasks={fetchTasks} />
        <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  )
}

export default Dashboard