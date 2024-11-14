import React, { useState } from 'react';
import ToDoList from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false, editing: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index, newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText, editing: false } : task
    );
    setTasks(updatedTasks);
  };

  const enableEdit = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, editing: true } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Editable To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ToDoList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
        enableEdit={enableEdit}
      />
    </div>
  );
}

export default App;
