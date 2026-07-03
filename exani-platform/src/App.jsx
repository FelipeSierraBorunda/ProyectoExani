import { useState } from 'react'

function App() {
  const [cuenta, setCuenta] = useState(0)
  return (
    <div>
      <h1>Ruta exani</h1>
      <p>{cuenta}</p>
      <button onClick={() => setCuenta(cuenta  + 1)}>+1</button>
      <Titulo texto="mate" />
      <Titulo texto="español" />
    </div>
  )
}
function Titulo (props) {
  return (
    <h1>{props.texto}</h1>
  )
}

export default App