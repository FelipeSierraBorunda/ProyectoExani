import { useNavigate,useLocation} from "react-router-dom"
import{useState} from "react"
import "./PaginaEstudio.css"
import avatarAndrea from "../../assets/Andrea.png"
import avatarFelipe from "../../assets/FelipePng.png"

function PaginaEstudio(){
    const [temaActivoId, setTemaActivoId] = useState(0)
    const {state} = useLocation()
    const temas=state?.temas
    return(
        <div className="General">
            <BarraLateral temas={temas} temaActivoId={temaActivoId} setTemaActivoId={setTemaActivoId}/>
            <Modulo tema={temas[temaActivoId]}/>
        </div>
    )
}
export default PaginaEstudio
function BarraLateral (props){
    
    const { temas, temaActivoId, setTemaActivoId } = props
    const navigate = useNavigate()
    const [seccionActiva, setSeccionActiva] = useState("")

    return(
        <div className="BarraLateral">
            <button className="regresar" onClick={() => navigate("/PaginaCurso")}>← Volver a mis áreas</button>
            <h3>
                Metodologia de la investigacion
            </h3>
            {temas.map((tema, iter) => 
            (
            <button key={iter} className={`BotonTemas ${temaActivoId === iter ? "active" : ""}`}
                onClick={() => setTemaActivoId(iter)}>
                <strong>{iter + 1}.</strong> {tema.tema}
            </button>
            ))}

            <div className="Tip">
                 <div className="ImagenPerfil1">
                    <img src={avatarAndrea} alt="img" />
                </div>
                <p><strong>Tip:</strong> estudia un módulo al día y repásalo con el simulador.</p>
            </div>
        </div>
    )
}
function Modulo ({ tema }){
    const [seccionActiva, setSeccionActiva] = useState("explicacion")

    return(
        <div className="ModuloContenido">
            <h2>Modulo 1</h2>
            <h1>{tema.tema}</h1>
            <div className="botonesModulos">
               <button className={seccionActiva === "explicacion" ? "active"  : ""}
                        onClick={() => setSeccionActiva("explicacion")}
                    >Explicacion</button>
                    <button
                        className={seccionActiva === "ejemplo" ? "active" : ""}
                        onClick={() => setSeccionActiva("ejemplo")}
                    >Ejemplo resuelto</button>
                    <button
                        className={seccionActiva === "practica"  ? "active" : ""}
                        onClick={() => setSeccionActiva("practica")}
                    >Práctica</button> 
            </div>
              {seccionActiva === "explicacion" && <ModuloExplicacion tema={tema}/>}
                    {seccionActiva === "ejemplo" && <ModuloEjemplo tema={tema}/>}
                    {seccionActiva === "practica" && <ModuloPractica tema={tema}/>}
        </div>
    )
}
function ModuloExplicacion({tema}){
    return(
        <div className="ModuloExplicacion">
            <p>{tema.explicacion.definicion}</p>
            <div className="ConceptoClaveDiv">
                <h1>{tema.explicacion.conceptoClave.titulo}</h1>
                <p>{tema.explicacion.conceptoClave.texto}</p>
            </div>
            <p>{tema.explicacion.segundaDefinicion}</p>
        </div>

    )
}
function ModuloEjemplo({tema}){
    return(
        <div>
            <div className="preguntaEjemplo">
                <p>
                   {tema.ejemploResuelto.pregunta}
                </p>
            </div>

           <div className="pasosEjemplo">
                {tema.ejemploResuelto.pasos.map((paso, i) => (
                    <div key={i} className={`paso ${paso.esRespuesta ? "pasoRespuesta" : ""}`}>
                        <div className={`pasoNumero ${paso.esRespuesta ? "pasoNumeroCheck" : ""}`}>
                            {paso.esRespuesta ? "✓" : paso.numero}
                        </div>
                        <div className={`pasoTexto ${paso.esRespuesta ? "pasoTextoRespuesta" : ""}`}>
                            {paso.texto}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
function ModuloPractica({tema}){
    const navigate = useNavigate()
    return(
        <div className="ModuloPratica">
             <div className="ImagenPerfil2">
                    <img src={avatarFelipe} alt="img" />
                </div>
                <h1>
                    ¿Listo para practicar?
                </h1>
                <p>El simulador genera preguntas de este módulo con retroalimentación inmediata.</p>
                 <button onClick={()=>navigate("/PaginaSimulador",{ state: { tema } }) }>Iniciar practica</button>
        </div>

    )
}