const Print = (event) => {
    const divWrapper = document.querySelector('.circleWrapper')
    
    divWrapper.insertAdjacentHTML('afterend', `<div class="circle" style="position: absolute; top: ${event.clientY}px; left: ${event.clientX}px">X: ${event.clientX} Y: ${event.clientY}</div>`)
  }

export { Print }