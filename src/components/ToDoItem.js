import React, { useState } from 'react';

function ToDoItem({ task, toggleTask, deleteTask, editTask, enableEdit }) {
  const [newText, setNewText] = useState(task.text);

  const handleEditChange = (e) => {
    setNewText(e.target.value);
  };

  const handleEditSubmit = () => {
    editTask(newText);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleTask}
      />
      {task.editing ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            value={newText}
            onChange={handleEditChange}
            style={{ marginLeft: '10px' }}
          />
          <button onClick={handleEditSubmit} className="save-btn">Save</button>
        </div>
      ) : (
        <>
          <span
            onDoubleClick={enableEdit}
            className={`todo-text ${task.completed ? 'completed' : ''}`}
          >
            {task.text}
          </span>
          <button onClick={deleteTask} className="delete-btn">Delete</button>
        </>
      )}
    </div>
  );
}

export default ToDoItem;
