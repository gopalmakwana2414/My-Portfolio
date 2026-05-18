import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

export default function App() {
  const [dark, setDark] = useState(false)
  const location = useLocation()

  useEffect(() => {
    fetch('/api/visitors/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ref: document.referrer || 'direct',
        page: location.pathname,
      }),
    }).catch(() => {})
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className={dark ? 'dark' : ''}>
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/"           element={<Hero       dark={dark} />} />
        <Route path="/about"      element={<About      dark={dark} />} />
        <Route path="/skills"     element={<Skills     dark={dark} />} />
        <Route path="/projects"   element={<Projects   dark={dark} />} />
        <Route path="/experience" element={<Experience dark={dark} />} />
        <Route path="/contact"    element={<Contact    dark={dark} />} />
      </Routes>
      <Footer dark={dark} />
    </div>
  )
}
