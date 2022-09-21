import TodoHeader from "./components/Header";
import TodoList from "./components/List";
import React, {useState} from 'react';

function App() {
  //list
  const [list, setList] = useState([
    {
      title: 'title',
      description: 'description',
      id: 'id1'
    }
  ])
  //delete button in List -> Task
  const DelTask = (id) => {
    console.log(id, 'has been deleted')
    setList(list.filter((task)=>task.id!== id))
  }

  return (
    <div className='todos'>
      <TodoHeader />
      {/* checking total count of records in list */} 
      {list.length > 0 ? (
      <TodoList list={list} onDelete={DelTask}/>
      ) : (<div style={{fontSize:'30px',fontWeight: 'bold', margin: '20px 0 0 0', display: 'flex', justifyContent: 'center'}}>Create first task!</div> )}
    </div>
  )
}

export default App;
