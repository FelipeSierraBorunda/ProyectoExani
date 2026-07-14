import { useState } from "react"
import { supabase } from "../supabase.js"
import "./PaginaLogin.css"

function PaginaLogin() {

    return (
       <BloqueLogin/>
    )
}
function BloqueLogin (){
    const [correo,setCorreo] = useState(``)
    const [contrasena,setcontrasena] = useState(`a`)
    const [mensaje,setMensaje] = useState(``)

    async function manejadordelogin(){
        const {data, error} = await supabase.auth.signInWithPassword({
            email: correo,
            password: contrasena
        })

        if(error){
            setMensaje("Correo o contraseña incorrectos")
        } else {
            setMensaje("Inicio de sesión exitoso")
        }
    }

    return(
    <div className="BloqueLogin">
            <div className="AvatarLogin">
            <img src="/avatar.png" alt="Avatar" />
        </div>
        <div className="FormularioLogin">
            <h1>Bienvenido de vuelta</h1>
            <h2>Continúa tu ruta hacia el examen </h2>
            <div className="CampoLogin">
                <h3>Correo electrónico</h3>
                <input onChange={(evento) => setCorreo(evento.target.value)} type="email" placeholder="tu@correo.com"></input>
            </div>
            <div className="CampoLogin">
                <h3>Contraseña</h3>
                <input onChange={(evento) => setcontrasena(evento.target.value)} type="password"></input>
            </div>
            <button className="BotonEntrar" onClick={manejadordelogin}>Entrar</button>
            <p className="MensajeLogin">{mensaje}</p>
        </div>
    </div>
    )
}


export default PaginaLogin