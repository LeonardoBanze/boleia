// src/routes.jsx
import { Routes, Route } from 'react-router-dom'
// import About from './pages/About'
import Home from './pages/Home'
import Contactos from './pages/Contactos'

import SobreNos from './pages/About'
import Servicos from './components/Service'
import ServicosPage from './pages/Service'
import BlogPage from './pages/Blog'
import Safety from './pages/Safety'

import InvestmentApplication from './pages/Invest'
import Prices from './pages/Prices'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contactos />} />
      <Route path="/about" element={<SobreNos />} />
      <Route path="/solutions" element={<ServicosPage />} />
      <Route path="/safety" element={<Safety />} />
      <Route path="/prices" element={<Prices />} />
      <Route path="/invest" element={<InvestmentApplication />} />
    </Routes>
  )
}
