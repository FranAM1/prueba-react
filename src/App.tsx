import { useEffect, useState,  } from 'react'
import './App.css'

function App() {
  const [cells, setCells] = useState(["A", "B", "C"])

  function changeContent(newValue: string, index: number) {
    const nextValue = cells.slice()
    nextValue[index] = newValue
    setCells(nextValue)
  }

  function addCell(index: number) {
    const nextValue = cells.slice()
    nextValue.splice(index + 1, 0, "")
    setCells(nextValue)
  }

  function createString(e: KeyboardEvent) {
    if (e.key !== "Enter") return

    console.log(cells.join(""))
  }
  
  useEffect(() => {
    document.addEventListener("keypress", createString)

    return () => {
      document.removeEventListener("keypress", createString)
    }
  }, [cells])


  return (
    <>
    <h1 className='title'>Primera app de prueba React</h1>
      <div className="cellsContainer">
        {
        cells.map((cell, index) => (
          <>
            <div 
            className={`cell ${cell === "" ? "emptyCell" : ""}`} 
            key={index}
            >
              <input type="text" maxLength={1} value={cell} onChange={(e) => changeContent(e.currentTarget.value, index)}/>
            </div>
            {index < cells.length && 
            <span className= "addCell" onClick={() => addCell(index)}></span>}
          </>
        ))
        }
      </div>
    </>
  )
}

export default App
