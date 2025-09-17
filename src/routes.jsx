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
import Yora from './pages/Yora'
import BCTTokenPage from './pages/BCT'
import RidePhases from './pages/Ridephases'
import ValueProposition from './pages/Value'
import Community from './pages/Community'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contactos />} />
      <Route path="/about" element={<SobreNos />} />
      <Route path="/services" element={<ServicosPage />} />
      <Route path="/safety" element={<Safety />} />
      <Route path="/prices" element={<Prices />} />
      <Route path="/invest" element={<InvestmentApplication />} />
      <Route path="/yora" element={<Yora />} />
      <Route path="/bct" element={<BCTTokenPage />} />
      <Route path="/ride" element={<RidePhases />} />
      <Route path="/value" element={<ValueProposition />} />
      <Route path="/community" element={<Community />} />
    </Routes>
  )
}
