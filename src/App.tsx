import { useState } from 'react'
import './App.css'

function App() {
  const [cells, setCells] = useState(["A", "B", "C"])

  return (
    <>
    <h1 className='title'>Primera app de prueba React</h1>
      <div className="cellsContainer">
        {
        cells.map((cell, index) => (
          <div className="cell" key={index}>
            {cell}
          </div>
        ))
        }
      </div>
    </>
  )
}

export default App
