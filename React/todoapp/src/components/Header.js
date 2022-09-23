import React from 'react';
import AddTask from "./AddTask";

const TodoHeader = () => {
  return (
    <div className="todos__header">
      <h1 className="todos__title">Todo App</h1>
      <div className="todos__tools">
        <AddTask/>
      </div>
    </div>
  )
}

export default TodoHeader;
