import { useNavigate } from "react-router-dom"
import { supabase } from "../../supabase.js"
import useUsuario from "../../hooks/useUsuario.jsx"

function PaginaCuenta(){
    return(
        <MiCuenta/>
    )
}

function MiCuenta(){
    const usuario = useUsuario()
    const navigate = useNavigate()

    async function CerrarSesion(){
        await supabase.auth.signOut()
        navigate("/")
    }

    if(!usuario) return <p>Cargando...</p>

    return(
        <div>
            <h1>{usuario.email}</h1>
            <h1>{usuario.user_metadata.nombre_apellido}</h1>
            <button onClick={CerrarSesion}>Cerrar sesión</button>
        </div>
    )
}

export default PaginaCuenta
