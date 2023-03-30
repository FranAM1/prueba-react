import { useState } from 'react'
import './App.css'

function App() {
  const [cells, setCells] = useState(["A", "B", "C"])

  function changeContent(newValue: string, index: number) {
    console.log(newValue, index)
    const nextValue = cells.slice()
    nextValue[index] = newValue
    setCells(nextValue)
  }

  return (
    <>
    <h1 className='title'>Primera app de prueba React</h1>
      <div className="cellsContainer">
        {
        cells.map((cell, index) => (
          <div 
          className="cell" 
          key={index}
          >
            <input type="text" maxLength={1} value={cell} onChange={(e) => changeContent(e.currentTarget.value, index)}/>
          </div>
        ))
        }
      </div>
    </>
  )
}

export default App
