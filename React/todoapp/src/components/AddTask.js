import React from 'react'
import Btn from './Button'
import { useState } from 'react'

const AddTask = () => {
  const [Title, setTitle] = useState('')
  const [Description, setDescription] = useState('')
  const [Date, setDate] = useState('')
  const [Reminder, setReminder] = useState(false)


  return (
    <form className="AddForms">
      <div className="AddForm__form">
        <label>Title</label>
        <input
          className='AddForm__textbox'
          type="text"
          placeholder='Title of a task'
          value={Title}
          onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="AddForm__form">
        <label>Description</label>
        <input
          className='AddForm__textbox'
          type="text"
          placeholder='Description of a task'
          value={Description}
          onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="AddForm__form">
        <label>Reminder</label>
        <input
          type="checkbox"
          value={Reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>
      <div className="AddForm__form">
        <label>Date of a notification</label>
        <input
          className='AddForm__textbox'
          type="text"
          placeholder='Date of a task`s notification'
          value={Date}
          onChange={(e) => setDate(e.target.value)} />
      </div>
      <Btn id='AddBtnIasdd' textClr='white' backClr='green' text='Add' />
    </form>
  )
}

export default AddTask