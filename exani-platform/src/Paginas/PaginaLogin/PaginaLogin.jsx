import { useState } from "react"
import { Link } from "react-router-dom"
import { supabase } from "../../supabase.js"
import "./PaginaLogin.css"
import avatarAndrea from "../../assets/Andrea.png"

function PaginaLogin() {

    return (
       <BloqueLogin/>
    )
}
function BloqueLogin (){
    const [correo,setCorreo] = useState(``)
    const [contrasena,setcontrasena] = useState(``)
    const [mensaje,setMensaje] = useState(``)
    const [mostrarRecuperar,setMostrarRecuperar] = useState(false)
    const [cargando,setCargando] = useState(false)

    async function manejadordelogin()
    {
        setMensaje(" ... ")
        setMostrarRecuperar(false)
        setCargando(true)
        const {data, error} = await supabase.auth.signInWithPassword({
            email: correo,
            password: contrasena
        })
        setCargando(false)

        if(error){
            setMensaje("Correo o contraseña incorrectos")
            setMostrarRecuperar(true)
        } else {
            setMensaje("Inicio de sesión exitoso")
            
        }
    }

    async function manejadorRecuperar(){
        if(!correo){
            setMensaje("Escribe tu correo para poder recuperar tu contraseña")
            return
        }
        setCargando(true)
        const { error } = await supabase.auth.resetPasswordForEmail(correo, {
            redirectTo: `${window.location.origin}/reset-password`
        })
        setCargando(false)

        if(error){
            setMensaje(error.message)
        } else {
            setMensaje("Revisa tu correo para restablecer tu contraseña")
            setMostrarRecuperar(false)
        }
    }

    return(
    <div className="BloqueLogin">
            <div className="AvatarLogin">
            <img src={avatarAndrea} alt="Avatar" />
        </div>
        <div className="FormularioLogin">
            <h1>Bienvenido de vuelta</h1>
            <h2>Continúa tu ruta hacia el examen </h2>
            <div className="CampoLogin">
                <label htmlFor="login-correo">Correo electrónico</label>
                <input id="login-correo" onChange={(evento) => setCorreo(evento.target.value)} type="email" placeholder="tu@correo.com"></input>
            </div>
            <div className="CampoLogin">
                <label htmlFor="login-contrasena">Contraseña</label>
                <input id="login-contrasena" onChange={(evento) => setcontrasena(evento.target.value)} type="password" placeholder="******"></input>
            </div>
            {mostrarRecuperar && (
                <p className="RecuperarContrasena" onClick={manejadorRecuperar}>¿Olvidaste tu contraseña?</p>
            )}
            <button className="BotonEntrar" onClick={manejadordelogin} disabled={cargando}>Entrar</button>
            <p className="MensajeLogin">{mensaje}</p>

            <div className="Registro">
                <p >¿Aún no tienes cuenta?</p>
                <Link id="Registrate" to="/PaginaRegistro">Registrate</Link>
            </div>

        </div>
    </div>
    )
}


export default PaginaLogin