
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import useUsuario from './hooks/useUsuario.jsx'
import LinkLogin from './Paginas/PaginaLogin/PaginaLogin.jsx'
import LinkInicio from './Paginas/PaginaInicio/PaginaInicio.jsx'
import LinkRegistro from './Paginas/PaginaRegistro/PaginaRegistro.jsx'
import LinkReset from './Paginas/PaginaResetPassword/PaginaResetPassword.jsx'
import LinkCuenta from './Paginas/PaginaCuenta/PaginaCuenta.jsx'
import LinkCurso from './Paginas/PaginaCurso/PaginaCurso.jsx'


function App() {

  return (
    <div>
      <BrowserRouter>

        <ContenidoNavBar />

        <Routes>
          <Route path="/" element={<LinkInicio />} />
          <Route path="/PaginaLogin" element={<LinkLogin />} />
          <Route path="/PaginaRegistro" element={<LinkRegistro />} />
          <Route path="/reset-password" element={<LinkReset />} />
          <Route path="/PaginaCuenta" element={<LinkCuenta />} />
          <Route path="/PaginaCurso" element={<LinkCurso />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}
function ContenidoNavBar(){
  const usuario = useUsuario()

  if(!usuario){
    return(
           <nav className='navbar'>
          <div className='navIzquierda'>
            <div className='nav-item' id="nav-item-re">RE</div>
            <div className='nav-item'><Link to="/">RutaExani</Link></div>
            
          </div>
          <div className='navDerecha'>
            <div className='nav-item' id="navlogin"><Link to="/PaginaLogin">Iniciar Sesión</Link></div>
          </div>
    </nav>
    )
  }
  else{
    return(
     <nav className='navbar'>
          <div className='navIzquierda'>
            <div className='nav-item' id="nav-item-re">RE</div>
            <div className='nav-item'><Link to="/">RutaExani</Link></div>
            
          </div>
          <div className='navDerecha'>
            <div className='nav-item' id="navlogin"><Link to="/PaginaCurso"> Curso</Link></div>
            <div className='nav-item' id="navlogin"><Link to="/PaginaCuenta"> Mi cuenta</Link></div>
          </div>
    </nav>
    )
  }


}

export default App