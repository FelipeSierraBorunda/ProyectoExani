
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import LinkLogin from './PaginaLogin/PaginaLogin.jsx'
import LinkInicio from './PaginaInicio/PaginaInicio.jsx'

function App() {

  return (
    <div>
      <BrowserRouter>
        <nav className='navbar'>
          <div className='navIzquierda'>
            <div className='nav-item' id="nav-item-re">RE</div>
            <div className='nav-item'><Link to="/">RutaExani</Link></div>
            
          </div>
          <div className='navDerecha'>
            <div className='nav-item'><Link to="/">¿Quiénes somos?</Link></div>
            <div className='nav-item' id="navlogin"><Link to="/PaginaLogin">Iniciar Sesión</Link></div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<LinkInicio />} />
          <Route path="/PaginaLogin" element={<LinkLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App