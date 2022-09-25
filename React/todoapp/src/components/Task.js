import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'todos__task-reminder' : "todos__task-no-reminder"}`} onDoubleClick={() => onToggle(task.id)} style={{position: 'relative'}}>
      <div className="todos__task-title">
        {task.title} 
      </div>
      <div className="todos__task-date">
        {task.date}
      </div>
      <div className="todos__task-description">
        {task.description}
      </div>
      <FaTimes onClick={() => onDelete(task.id)} style={{cursor: 'pointer', position: 'absolute', top: '3px', right: '5px', color: 'red', height: '18px'}} />
    </div>
  )
}

export default Task