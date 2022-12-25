import { useState } from 'react'
import './App.css'

function App() {

  //undo cordinates storage
  const [undoStorage, setUndoStorage] = useState<any[]>([])

  //click cordinates storage
  const [storage, setStorage] = useState<any[]>([]);

  //click component
  const getCordinates = (event: any) => {
    const currentCordinates = {
      X: event.clientX,
      Y: event.clientY,
    };

    setStorage((prev) => [...prev, currentCordinates])

    setUndoStorage([])
  }

  //undo component
  const handleUndo = (event: any) => {
    event.stopPropagation();

    if (storage.length === 0) {
      return;
    }

    const prevItem = storage[storage.length - 1]
    setUndoStorage((prev) => [...prev, prevItem])

    setStorage((prev) => {
      const cordinatesCopy = [...prev].slice(0, -1);
      return cordinatesCopy;
    })
  }

  //redo component
  const handleRedo = (event: any) => {
    event.stopPropagation();

    if (undoStorage.length === 0) {
      return;
    }

    const redoCircle = undoStorage[undoStorage.length - 1]
    setStorage((prev) => [...prev, redoCircle])

    setUndoStorage((prev) => {
      const cordinatesCopy = [...prev].slice(0, -1);
      return cordinatesCopy;
    })
  }

  return (
    <>

      <div className='circleWrapper' onClick={getCordinates}>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
        {storage.map((item) => (
          <span
            key={item.X}
            className='circle'
            style={{ top: item.Y, left: item.X }} />
        ))}
      </div>

    </>
  )
}

export default App
