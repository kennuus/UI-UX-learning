import React from 'react';
import Task from './Task';

const TodoList = ({ list, onDelete, onToggle}) => {
  return (
    <div className="todos__list">
      {list.map((task)=>(
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default TodoList;
