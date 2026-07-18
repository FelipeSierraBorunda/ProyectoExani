import { useNavigate } from "react-router-dom"
import{useState} from "react"
import "./PaginaEstudio.css"
import avatarAndrea from "../../assets/Andrea.png"
function PaginaEstudio(){


    return(
        <div className="General">
            <BarraLateral/>
            <Modulo/>
        </div>
    )
}
export default PaginaEstudio
function BarraLateral (){
    
    const navigate = useNavigate()
    const [seccionActiva, setSeccionActiva] = useState("1")

    return(
        <div className="BarraLateral">
            <button className="regresar" onClick={() => navigate("/PaginaCurso")}>← Volver a mis áreas</button>
            <h3>
                Metodologia de la investigacion
            </h3>
            <button className={`BotonTemas ${seccionActiva === "1" ? "active" : ""}`}
                onClick={() => setSeccionActiva("1")} ><strong>1.</strong>  Tema 1</button>
            <button className={`BotonTemas ${seccionActiva === "2" ? "active" : ""}`}
                onClick={() => setSeccionActiva("2")}><strong>2.</strong>  Tema 1</button>

            <div className="Tip">
                 <div className="ImagenPerfil1">
                    <img src={avatarAndrea} alt="img" />
                </div>
                <p><strong>Tip:</strong> estudia un módulo al día y repásalo con el simulador.</p>
            </div>
        </div>
    )
}
function Modulo (){
    const [seccionActiva, setSeccionActiva] = useState("explicacion")
    return(
        <div className="ModuloContenido">
            <h2>Modulo 1</h2>
            <h1>Tema 1: Metodo cientifico</h1>
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
              {seccionActiva === "explicacion" && <ModuloExplicacion/>}
                    {seccionActiva === "ejemplo" && <ModuloEjemplo/>}
                    {seccionActiva === "practica" && <ModuloPractica/>}
        </div>
    )
}
function ModuloExplicacion(){
    return(
        <div className="ModuloExplicacion">
            <p>El método científico es el procedimiento sistemático mediante el cual se genera conocimiento válido y verificable. En el EXANI se evalúa tu capacidad para identificar sus etapas en situaciones concretas.</p>
            <div className="ConceptoClaveDiv">
                <h1>Titulo</h1>
                <p>Texto</p>
            </div>
            <p>Texto</p>
        </div>

    )
}
function ModuloEjemplo(){
    return(
        <div>
            <div className="preguntaEjemplo">
                <p>
                   Texto
                </p>
            </div>

            <div className="pasosEjemplo">
                <div className="paso">
                    <div className="pasoNumero">1</div>
                    <div className="pasoTexto">
                        texto
                    </div>
                </div>
                <div className="paso">
                    <div className="pasoNumero">2</div>
                    <div className="pasoTexto">
                        texto
                    </div>
                </div>
                <div className="paso pasoRespuesta">
                    <div className="pasoNumero pasoNumeroCheck">✓</div>
                    <div className="pasoTexto pasoTextoRespuesta">
                      texto
                    </div>
                </div>
            </div>
        </div>
    )
}
function ModuloPractica(){
    return(
        <p>Hola</p>
    )
}