import React, {useState} from 'react'
import Result from './components/Result'
import Buttons from './components/Buttons'
import TextBoxes from './components/TextBoxes'

function App() {
  const [nums, setNum] = useState([])

  return(
    <div>
      <TextBoxes/>
      <Buttons/>
      <Result nums={nums} />
    </div>
  )
}

export default App;
