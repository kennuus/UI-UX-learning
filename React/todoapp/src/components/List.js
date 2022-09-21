import React from 'react';
import Task from './Task';

const TodoList = ({ list, onDelete }) => {
  return (
    <div className="todos__list">
      {list.map((task)=>(
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default TodoList;
