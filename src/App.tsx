import { useState } from 'react'
import './App.css'

function App() {
  function printMousePos(event) {
    document.body.innerHTML = `<div class="circle" style="color: yellow; position: absolute; top:${event.clientY}px; left: ${event.clientX}px">${event.clientX} ${event.clientY}</div>`
  }
  
  document.addEventListener("click", printMousePos);

}

export default App
