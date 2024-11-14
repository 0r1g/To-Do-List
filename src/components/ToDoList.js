import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, toggleTask, deleteTask, editTask, enableEdit }) {
  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          task={task}
          toggleTask={() => toggleTask(index)}
          deleteTask={() => deleteTask(index)}
          editTask={(newText) => editTask(index, newText)}
          enableEdit={() => enableEdit(index)}
        />
      ))}
    </div>
  );
}

export default ToDoList;
