import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!title) {
      alert('Please, write your title before sent it to list')
      return
    } else if (!description) {
      alert('Please, write your description before sent it to list')
      return
    } else if (!title || !description) {
      alert('Please, write your description and title before sent it to list')
      return
    }
    onAdd({ title, description, date, reminder })

    setTitle('')
    setDescription('')
    setDate('')
    setReminder(false)
  }

  return (
    <div className="todos__tools">
      <form className="AddForms" onSubmit={onSubmit}>
        <div className="AddForm__form ">
          <label>Title</label>
          <input
            className='AddForm__textbox'
            type="text"
            placeholder='title of a task'
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="AddForm__form">
          <label>Description</label>
          <input
            className='AddForm__textbox'
            type="text"
            placeholder='description of a task'
            value={description}
            onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="AddForm__form">
          <label>Reminder</label>
          <input
            type="checkbox"
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <div className="AddForm__form">
          <label>Date</label>
          <input
            className='AddForm__textbox'
            type="text"
            placeholder='Date of a task'
            value={date}
            onChange={(e) => setDate(e.target.value)} />
        </div>
        <button id='AddBtnIasdd' className='button' >
          Add
        </button>
      </form>
    </div>
  )
}

export default AddTask