import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  
  const addTask = () => {
    // .trim() method used to delete whispace from both ends
    if (newTask.trim() !== '') {
      // create a new task object
      const newTaskObject = {
        id: Date.now(),
        text: newTask,
      };
      // update the state to include a newly created task
      setTasks([...tasks, newTaskObject]);
      // clear the input field
      setNewTask('');
    }
  };

  // add a new task by pressing Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };
  
  const deleteTask = (taskId) => {
    // filter the tasks to exclude the one with the specified id
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    // update the state to reflect the deletion
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.todo_app}>
      <div className={styles.rectangle}>
        <h1 className={styles.title}>What's the Plan for Today?</h1>
        <div className={styles.inputContainer}>
          <input className={styles.input_field} type='text' placeholder="Add a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={handleKeyDown} />
          <button className={styles.addTask_btn} onClick={addTask}>Add Task</button>
        </div>
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task, i) => (
            <li key={"task_" + i}>
              {task.text}
              <button onClick={() => deleteTask(task.id)} className={styles.delete_button}>
                  <svg class="delete-svgIcon" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>
              </button>
              
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
}

export default App;