import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PaginaLogin from './PaginaLogin/PaginaLogin.jsx'
import PaginaInicio from './PaginaInicio/PaginaInicio.jsx'

createRoot(document.getElementById('root')).render(
    <PaginaInicio />
)
