import './App.css'

function App() {
  return (
    <>
      {/* without id */}
      <label>
        Name
        <input type="text" />
      </label>

      {/* with id */}
      <label htmlFor="name">Name2</label>
      <input type="text" id="name" />
    </>
  )
}

export default App
