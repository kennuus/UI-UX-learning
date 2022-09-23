import TodoHeader from "./components/Header";
import TodoList from "./components/List";
import React, {useState} from 'react';

function App() {
  //list
  const [list, setList] = useState([
    {
      title: 'title',
      description: 'description',
      id: 'id1',
      reminder: false
    },{
      title: 'title2',
      description: 'description2',
      id: 'id2',
      reminder: false
    }
  ])

  //delete button in List -> Task
  const DelTask = (id) => {
    setList(list.filter((task)=>task.id!== id))
  }

  //remind on double click
  const reminderDblClk = (id) => {
    setList(list.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className='todos'>
      <TodoHeader />

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
