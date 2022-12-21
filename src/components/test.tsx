function Number(props) {
    return (
      <div className="App">
        <div className="card">

          <p>The number state is: {props.num}</p>
          <div className="circleWrapper" onClick={() => props.setNum(props.num+10)}>Count 10</div>
          
        </div>
      </div>
    )
}

export { Number }

