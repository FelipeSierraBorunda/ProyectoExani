import { useState } from "react"
import { supabase } from "../supabase.js"

function PaginaLogin() {

    return (
       <BloqueLogin/>
    )
}
function BloqueLogin (){
    const [correo,setCorreo] = useState(`tu@correo.com`)
    const [contrasena,setcontrasena] = useState(`a`)
    const [mensaje,setMensaje] = useState(``)

    function manejadordelogin(props){
        
        console.log("Intentatdo login")
    }
    console.log(correo)
    return(
    <div>
            <h1>Bienvenido de vuelta</h1>
            <h2>Continúa tu ruta hacia el examen </h2>
            <h3>Correo electrónico</h3>
            <input onChange={(evento) => setCorreo(evento.target.value)} type="email" ></input>
            <h3>Contraseña</h3>
            <input onChange={(evento) => setcontrasena(evento.target.value)} type="password"></input>
            <button onClick={manejadordelogin}>Entrar</button>
    </div>
    )
}


export default PaginaLogin