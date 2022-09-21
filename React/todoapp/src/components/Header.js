import React from 'react';
import Btn from "./Button";
import Textbox from "./Textbox";

const TodoHeader = () => {
  return (
    <div className="todos__header">
      <h1 className="todos__title">Todo App</h1>
      <div className="todos__tools">
        <Textbox id='AddTaskTextboxId'/>
        <Btn id='AddBtnIasdd' textClr='white' backClr='green' text='Add'/>
      </div>
    </div>
  )
}

export default TodoHeader;
