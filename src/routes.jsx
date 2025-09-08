// src/routes.jsx
import { Routes, Route } from 'react-router-dom'
// import About from './pages/About'
import Home from './pages/Home'
import Contactos from './pages/Contactos'

import SobreNos from './pages/About'
import Servicos from './components/Service'
import ServicosPage from './pages/Service'
import BlogPage from './pages/Blog'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contactos />} />
      <Route path="/about" element={<SobreNos />} />
      <Route path="/service" element={<ServicosPage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  )
}
