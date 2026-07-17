import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { supabase } from "../../supabase.js"
import "./PaginaRegistro.css"
import avatarFelipe from "../../assets/Felipe.png"


function PaginaRegistro(){
    return(
        <BloqueRegistro/>
    )
}
function BloqueRegistro(){

    const [correo,setCorreo] = useState(``)
    const [contrasena,setcontrasena] = useState(``)
    const [confirmarContrasena,setConfirmarContrasena] = useState(``)
     const [nombreApellido,setNombreApellido] = useState(``)
     const [estado,setEstado] = useState(``)
    const [nivelPosgrado,setNivelPosgrado] = useState(``)
    const [mensaje,setMensaje] = useState(``)
    const [cargando,setCargando] = useState(false)
    const navigate = useNavigate()


    async function manejadorRegistro(){
        setMensaje(" ... ")
        if(!nombreApellido || !nivelPosgrado || !estado || !correo ||!contrasena){
            setMensaje("Completa todos los campos antes de registrarte")
            return
        }

        if(contrasena !== confirmarContrasena){
            setMensaje(" ... ")
            setMensaje("Las contraseñas no coinciden")
            return
        }

        setCargando(true)
        const {data, error} = await supabase.auth.signUp({
            email: correo,
            password: contrasena,
            options:{
                data:{
                    nombre_apellido:nombreApellido,
                    estado_:estado,
                    nivel_posgrado:nivelPosgrado
                }
            }
        })
        setCargando(false)

        if(error)
        {
        setMensaje(error.message)
        }
        else if(data.user && data.user.identities.length === 0)
        {
            setMensaje("Este correo ya está registrado. Intenta iniciar sesión.")
        }
        else if(data.session)
            {
            setMensaje("Registro exitoso, te redirigiremos a iniciar sesión")
            setTimeout(() =>
                {
                 navigate("/PaginaLogin")
                }, 2000) // 2000ms = 2 segundos

        } else {
            setMensaje("Revisa tu correo para confirmar tu cuenta")
        }

       
    }
    

    return(
    <div className="BloqueRegistro">
            <div className="AvatarRegistro">
            <img src={avatarFelipe} alt="Avatar" />
        </div>
        <div className="FormularioRegistro">
            <h1>Es tú momento de iniciar</h1>
            <h2>Empieza tu ruta hacia el examen </h2>

            <div className="CampoRegistro">
                <label htmlFor="registro-nombre">Nombre y apellido</label>
                <input id="registro-nombre" onChange={(evento) => setNombreApellido(evento.target.value)} type="text" placeholder="Escribe tu nombre"></input>
            </div>
            <div className="CampoRegistro">
                <label htmlFor="registro-nivel">Nivel de posgrado</label>
                <select id="registro-nivel" onChange={(evento) => setNivelPosgrado(evento.target.value)} value={nivelPosgrado}>
                     <option value="" disabled>Selecciona tu nivel de posgrado</option>
                    <option value="Maestría">Maestría</option>
                    <option value="Doctorado">Doctorado</option>
                </select>
            </div>
            <div className="CampoRegistro">
                <label htmlFor="registro-estado">Estado</label>
                <select id="registro-estado" onChange={(evento) => setEstado(evento.target.value)} value={estado}>
                    <option value="" disabled>Selecciona tu estado</option>
                    <option value="Aguascalientes">Aguascalientes</option>
                    <option value="Baja California">Baja California</option>
                    <option value="Baja California Sur">Baja California Sur</option>
                    <option value="Campeche">Campeche</option>
                    <option value="Chiapas">Chiapas</option>
                    <option value="Chihuahua">Chihuahua</option>
                    <option value="Ciudad de México">Ciudad de México</option>
                    <option value="Coahuila">Coahuila</option>
                    <option value="Colima">Colima</option>
                    <option value="Durango">Durango</option>
                    <option value="Estado de México">Estado de México</option>
                    <option value="Guanajuato">Guanajuato</option>
                    <option value="Guerrero">Guerrero</option>
                    <option value="Hidalgo">Hidalgo</option>
                    <option value="Jalisco">Jalisco</option>
                    <option value="Michoacán">Michoacán</option>
                    <option value="Morelos">Morelos</option>
                    <option value="Nayarit">Nayarit</option>
                    <option value="Nuevo León">Nuevo León</option>
                    <option value="Oaxaca">Oaxaca</option>
                    <option value="Puebla">Puebla</option>
                    <option value="Querétaro">Querétaro</option>
                    <option value="Quintana Roo">Quintana Roo</option>
                    <option value="San Luis Potosí">San Luis Potosí</option>
                    <option value="Sinaloa">Sinaloa</option>
                    <option value="Sonora">Sonora</option>
                    <option value="Tabasco">Tabasco</option>
                    <option value="Tamaulipas">Tamaulipas</option>
                    <option value="Tlaxcala">Tlaxcala</option>
                    <option value="Veracruz">Veracruz</option>
                    <option value="Yucatán">Yucatán</option>
                    <option value="Zacatecas">Zacatecas</option>
                </select>
            </div>

            <div className="CampoRegistro">
                <label htmlFor="registro-correo">Correo electrónico</label>
                <input id="registro-correo" onChange={(evento) => setCorreo(evento.target.value)} type="email" placeholder="tu@correo.com"></input>
            </div>
            <div className="CampoRegistro">
                <label htmlFor="registro-contrasena">Contraseña</label>
                <input id="registro-contrasena" onChange={(evento) => setcontrasena(evento.target.value)} type="password" placeholder="******"></input>
            </div>
            <div className="CampoRegistro">
                <label htmlFor="registro-confirmar-contrasena">Confirmar contraseña</label>
                <input id="registro-confirmar-contrasena" onChange={(evento) => setConfirmarContrasena(evento.target.value)} type="password" placeholder="******"></input>
            </div>

            <button className="BotonRegistrar" onClick={manejadorRegistro} disabled={cargando}>Registrarse</button>
            <p className="MensajeRegistro">{mensaje}</p>
            <div className="LoginLink">
                <p >Ya tengo cuenta!</p>
                <Link id="Registrate" to="/PaginaLogin">Iniciar sesión</Link>
            </div>

        </div>
    </div>
    )
}

export default PaginaRegistro