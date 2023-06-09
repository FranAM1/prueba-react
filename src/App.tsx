import { useEffect, useState,  } from 'react'
import './App.css'

function App() {
  const [cells, setCells] = useState(["A", "B", "C"])

  const [string, setString] = useState("")

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

  function deleteCell(index: number) {
    if (cells.length === 2) return
    const nextValue = cells.slice()
    nextValue.splice(index, 1)
    setCells(nextValue)
  }

  function createString(e: KeyboardEvent) {
    if (e.key !== "Enter") return

    setString(cells.join(""))
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
          <div className="grid">
            <div 
            className={`cell ${cell === "" ? "emptyCell" : ""}`} 
            key={index}
            >
              <input type="text" maxLength={1} value={cell} onChange={(e) => changeContent(e.currentTarget.value, index)}/>
            </div>   
            {index < cells.length-1 && 
            <span className= "addCell" onClick={() => addCell(index)}></span>}
            <span className="botonBorrar" onClick={() => deleteCell(index)}>BORRAR</span>
          </div>
        ))
        }
      </div>
      <div className="stringContainer"> {string} </div>
    </>
  )
}

export default App
