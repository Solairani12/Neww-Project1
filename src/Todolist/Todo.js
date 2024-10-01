import React, { useState } from 'react';
import './Todo.css'; // Import the CSS file

function TodoList() {
  // State to hold the tasks
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Function to add a task
  const addTask = () => {
    if (taskInput.trim() === '') {
      alert('Please enter a task!');
      return;
    }

    const newTask = {
      id: Date.now(), // Unique ID for each task
      text: taskInput,
      completed: false,
    };

    // Update tasks state
    setTasks([...tasks, newTask]);
    setTaskInput(''); // Clear the input field
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
   
   
   <div className="todo-container">
      <div className="todo-wrapper">
        <h3>To-Do List</h3>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="todoInput"
            placeholder="Add a task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <label htmlFor="todoInput">New Task</label>
        </div>
        <button className="btn btn-success mb-3" onClick={addTask}>Add Task</button>

        {/* Task List Display */}
        <ul id="todoList" className="list-group">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item">
              <input
                type="checkbox"
                className="form-check-input"
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)} // Handle checkbox change
              />
              <span className={task.completed ? 'completed-task' : ''}>
                {task.text}
              </span>
              <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
