import { useNavigate, useLocation} from "react-router-dom"
import "../PaginaEstudio/PaginaEstudio.jsx"


function PaginaSimulador(){
    const navigate = useNavigate()
    const {state} = useLocation()
    const tema=state?.tema
    return(
        <div>
            <button onClick={()=>navigate("/PaginaEstudio") }>Regresar</button>
            <p>{tema?.tema}</p>
            <p>Hola</p>
            
        </div>
    )
}
export default PaginaSimulador