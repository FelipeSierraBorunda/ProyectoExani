import './PaginaInicio.css'

function PaginaInicio() {
  return (
    <div>
      <DescripcionCurso />
        <AreasCurso />
        <PlanesPago />
    </div>
  )
}
function DescripcionCurso() {
    return (
        <div className="DescripcionCurso">
            <div className="DivContenido">
                <div>
                </div>
                <div className="ContenidoTexto">
                    <h1 id="TituloInicial">Curso de preparación para el EXANI III</h1>
                    <p id="ParrafoDescripcion">Guías, módulos y simuladores diseñados por egresados que presentaron el examen y 
                        obtuvieron los puntajes más altos.</p>
                    <button className="BotonInscribirse">Comenzar mi preparación</button>
                </div>
            </div>
        </div>
    )
}
function AreasCurso() {
    return (
        <div className="AreasCurso">
            <div className="DivContenidoVertical">
                <h1>Tres áreas, un objetivo</h1>
                <p>El contenido exacto que evalúa el CENEVAL, sin rellenos</p>
                <div className="DivAreas">
                    <div className="Area">
                        <h2>Metodología de la Investigación</h2>
                        <p>Enfoques, diseños de estudio, hipótesis y análisis de textos científicos.</p>
                    </div>
                    <div className="Area">
                        <h2>Pensamiento Matemático</h2>
                        <p>Aritmética, álgebra, probabilidad y razonamiento con series y patrones.</p>
                    </div>
                    <div className="Area">
                        <h2>Redacción Indirecta</h2>
                        <p>Cohesión, concordancia, puntuación y estructura del texto en español.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
function PlanesPago() {
    return (
        <div className="PlanesPago">
            <div className="DivContenido">
            <h1>Planes de pago</h1>
            </div>

        </div>
    )
}

export default PaginaInicio