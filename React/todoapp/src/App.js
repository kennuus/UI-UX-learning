import TodoHeader from "./components/Header";
import TodoList from "./components/List";
import React, {useState} from 'react';

function App() {
  //list
  const [list, setList] = useState([])

  //delete button in List -> Task
  const DelTask = (id) => {
    setList(list.filter((task)=>task.id!== id))
  }

  //remind on double click
  const reminderDblClk = (id) => {
    setList(list.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  //onsubmit of forms
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id, ...task}
    setList([...list, newTask])
  }

  return (
    <div className='todos'>
      <TodoHeader onAdd={addTask}/>

      {list.length > 0 ? 
      (<TodoList 
        list={list} 
        onDelete={DelTask} 
        onToggle={reminderDblClk}
      />) 
      : 
      (<div 
        style={{fontSize:'30px',fontWeight: 'bold', margin: '20px 0 0 0', display: 'flex', justifyContent: 'center'}}>Create first task!
      </div> )}
    </div>
  )
}

export default App;
