import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home',       path: '/'           },
  { label: 'About',      path: '/about'      },
  { label: 'Skills',     path: '/skills'     },
  { label: 'Projects',   path: '/projects'   },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact',    path: '/contact'    },
]

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navBg = scrolled
    ? dark ? 'rgba(15,23,42,0.96)' : 'rgba(255,255,255,0.96)'
    : 'transparent'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: navBg,
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <span
          onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          onMouseEnter={e => { e.currentTarget.style.color = '#6366f1' }}
          onMouseLeave={e => { e.currentTarget.style.color = dark ? '#ffffff' : '#1e293b' }}
          style={{ fontSize: 26, fontWeight: 800, cursor: 'pointer', color: dark ? '#ffffff' : '#1e293b', fontFamily: 'var(--font-display)', letterSpacing: '0.12em', transition: 'all 0.3s ease' }}
        >
          GM<span style={{ color: '#6366f1' }}>.</span>
        </span>

        <div className="nav-desktop" style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {NAV_LINKS.map(l => (
            <NavLink
              key={l.path}
              to={l.path}
              style={({ isActive }) => ({
                padding: '8px 16px', borderRadius: '10px', fontSize: '14px', fontWeight: 500,
                textDecoration: 'none', fontFamily: 'var(--font-sans)',
                color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                background: isActive ? 'rgba(99,102,241,0.1)' : 'transparent',
                transition: 'all 0.2s ease',
              })}
              onMouseEnter={e => { if (!e.target.classList.contains('active')) e.target.style.background = 'rgba(99,102,241,0.08)' }}
              onMouseLeave={e => { e.target.style.background = 'transparent' }}
            >
              {l.label}
            </NavLink>
          ))}

          <button
            onClick={() => setDark(!dark)}
            style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid var(--border)', background: 'var(--bg-card)', cursor: 'pointer', fontSize: 15, marginLeft: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
          >
            {dark ? '☀️' : '🌙'}
          </button>

          <a href="/Gopal Makwana_resume.pdf" download className="btn btn-solid" style={{ marginLeft: 10, padding: '9px 18px', fontSize: 13, fontWeight: 500 }}>
            Resume ↓
          </a>
        </div>

        <div className="nav-mobile-btn" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button onClick={() => setDark(!dark)} style={{ width: 34, height: 34, borderRadius: '50%', border: '1.5px solid var(--border)', background: 'transparent', cursor: 'pointer', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {dark ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setMenu(!menu)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[0,1,2].map(i => <div key={i} style={{ width: 22, height: 2, background: 'var(--text-muted)', borderRadius: 2 }} />)}
          </button>
        </div>
      </div>

      {menu && (
        <div style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', padding: '12px 24px 20px' }}>
          {NAV_LINKS.map(l => (
            <NavLink
              key={l.path}
              to={l.path}
              onClick={() => setMenu(false)}
              style={({ isActive }) => ({
                display: 'block', padding: '10px 14px', borderRadius: '10px', fontSize: '14px',
                fontWeight: 500, textDecoration: 'none', fontFamily: 'var(--font-sans)',
                color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                background: isActive ? 'rgba(99,102,241,0.1)' : 'transparent',
                marginBottom: 6,
              })}
            >
              {l.label}
            </NavLink>
          ))}
          <a href="/Gopal Makwana_resume.pdf" download className="btn btn-solid" style={{ marginTop: 10, width: '100%', padding: '10px 0' }}>
            Download Resume ↓
          </a>
        </div>
      )}
    </nav>
  )
}
