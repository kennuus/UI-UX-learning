import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
  return (
    <div className="todos__task">
      <div className="todos__task-title" style={{position: 'relative'}}>
        {task.title} <FaTimes onClick={() => onDelete(task.id)} style={{cursor: 'pointer', position: 'absolute', top: '-3px', right: '-1px', color: 'red', height: '23px'}} />
      </div>
      <div className="todos__task__description">
        {task.description}
      </div>
    </div>
  )
}

export default Task