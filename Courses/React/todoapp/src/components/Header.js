import React from 'react';
import AddTask from "./AddTask";

const TodoHeader = ({onAdd}) => {
  return (
    <div className="todos__header">
      <h1 className="todos__title">Todo App</h1>
      <AddTask onAdd={onAdd}/>
    </div>
  )
}

export default TodoHeader;
