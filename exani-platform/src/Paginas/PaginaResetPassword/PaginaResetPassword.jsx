import { useState } from "react"
import { supabase } from "../../supabase.js"
import "./PaginaResetPassword.css"
import avatarAndrea from "../../assets/Andrea.png"
import { useNavigate } from "react-router-dom"

function PaginaResetPassword() {

    return (
       <BloqueLogin/>
    )
}
function BloqueLogin (){
    const navigate = useNavigate()
    const [contrasena,setcontrasena] = useState(``)
    const [confirmarContrasena,setConfirmarContrasena] = useState(``)
    const [mensaje,setMensaje] = useState(``)
    const [cargando,setCargando] = useState(false)

    async function manejadorReset(){
         setMensaje(" ... ")

        if(contrasena !== confirmarContrasena){
            setMensaje("Las contraseñas no coinciden")
            return
        }

        setCargando(true)
        const { error } = await supabase.auth.updateUser({
            password: contrasena
        })
        setCargando(false)

        if(error){
            setMensaje(error.message)
        } else {
            setMensaje("Contraseña actualizada exitosamente")
            setTimeout(() => 
                {
                 navigate("/")
                }, 2000) // 2000ms = 2 segundos

        }
    }

    return(
    <div className="BloqueLogin">
            <div className="AvatarLogin">
            <img src={avatarAndrea} alt="Avatar" />
        </div>
        <div className="FormularioLogin">
            <h1>Recuperación de contraseña</h1>
            <h2>Ingresa tu nueva contraseña</h2>

            <div className="CampoLogin">
                <label htmlFor="reset-contrasena">Nueva Contraseña</label>
                <input id="reset-contrasena" onChange={(evento) => setcontrasena(evento.target.value)} type="password" placeholder="******"></input>
            </div>
            <div className="CampoLogin">
                <label htmlFor="reset-confirmar-contrasena">Confirmar nueva contraseña</label>
                <input id="reset-confirmar-contrasena" onChange={(evento) => setConfirmarContrasena(evento.target.value)} type="password" placeholder="******"></input>
            </div>
            <button className="BotonEntrar" onClick={manejadorReset} disabled={cargando}>Guardar contraseña</button>
            <p className="MensajeLogin">{mensaje}</p>

        </div>
    </div>
    )
}


export default PaginaResetPassword