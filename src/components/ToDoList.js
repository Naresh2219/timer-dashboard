// ToDoList.js
import React, { useState } from 'react';
import Alarm from './Alarm';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState(null);

  const handleAddTask = () => {
    if (!newTask.trim()) {
      setError('Task cannot be empty');
      return;
    }
    const task = {
      text: newTask,
      alarm: null,
    };
    setTasks((prevTasks) => [...prevTasks, task]);
    setNewTask('');
    setError(null);
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
  };

  const handleEditTask = (index, newTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, text: newTask } : task
      )
    );
  };

  const handleSetAlarm = (index, alarmTime) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, alarm: alarmTime } : task
      )
    );
  };

  return (
    <div className="todo-list-container">
      <h2 className="todo-list-header">To-Do List</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="todo-input-field">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
          className="todo-input"
        />
        <button onClick={handleAddTask} className="add-button">
          Add
        </button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            <span className="todo-text">{task.text}</span>
            <div className="todo-actions">
              <button
                onClick={() => handleDeleteTask(index)}
                className="delete-button"
              >
                Delete
              </button>
              <button
                onClick={() => handleEditTask(index, prompt('Edit task:'))}
                className="edit-button"
              >
                Edit
              </button>
              <Alarm
                task={task}
                index={index}
                handleSetAlarm={handleSetAlarm}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;