import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cunter from './component/Cunter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Cunter />
  </StrictMode>,
)
