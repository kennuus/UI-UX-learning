import React from 'react';
import Task from './Task';

const TodoList = ({ list, onDelete, onToggle}) => {
  return (
    <ol className="todos__list">
      {list.map((task)=>(
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </ol>
  )
}

export default TodoList;
