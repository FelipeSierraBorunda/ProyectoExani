import { use } from "react"
import { supabase } from "../../supabase.js"
import useUsuario from "../../hooks/useUsuario"
import avatarAndrea from "../../assets/Andrea.png"
import "./PaginaCurso.css"
import { useNavigate } from "react-router-dom"

function PaginaCurso(){
    return(
        <div>
            <BannerPerfil/>
        </div>
    )
}
function BannerPerfil(){
    const usuario = useUsuario()

    if(!usuario) return <p>Cargando...</p>

    return(
        <div className="ContenidoPagina">
            <div className="bannerPerfil">
                <div className="ImagenPerfil">
                    <img src={avatarAndrea} alt="img" />
                </div>
                <div className="informacionPerfil">
                    <h1>Hola, {usuario.user_metadata.nombre_apellido}</h1>
                    <h2>Faltan 34 días para tu examen. Sigue con tu ruta.</h2>
                </div>
            </div>
            <div className="DivCursos">
                <h1 id="TituloAreas">Tus áreas</h1>
                <div className="Modulos">
                   <Modulo1/>
                    <Modulo1/>
                    <Modulo1/>
                </div>
            </div>
        </div>       
    )
}

function Modulo1 (){
    const navigate = useNavigate()
    return(
        <button className="Modulo" onClick={() => navigate("/PaginaEstudio")}>
                <div className="LogoModulo">M</div>
                    <h2>
                        Metodologia de la investigación
                    </h2>
                    <p>6 modulos </p>
                    <div className="Progresorecorrido">
                        <p>Progreso</p>
                        <p>50%</p>
                    </div>
                    <div className="ProgresoBorde">
                        <div className="ProgesoInterno">
                    </div>
                </div>
        </button>
    )
}


export default PaginaCurso