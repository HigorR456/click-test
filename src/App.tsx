import { useState } from 'react'
import { Print } from './components/printCircle'
import { CircleDiv } from './components/div'
import './App.css'

function App() {

  let storage = [];
  const [num, setPrint] = useState()

  function Do() {
    console.log(storage)
    divWrapper.insertAdjacentHTML('afterend', storage)
  }
  

  function Undo(){
    const circleWrap = document.querySelector('.circle')

    storage.push(circleWrap)
    
    circleWrap.remove()
  }

return (
  <>

    <button onClick={Undo}>Undo</button>
    <button onClick={Do}>Do</button>
    
    <CircleDiv />
    
    
  </>
)
}

export default App
