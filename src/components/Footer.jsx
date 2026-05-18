import { useNavigate } from 'react-router-dom'

const LINKS = [
  { label: 'Home',       path: '/'           },
  { label: 'About',      path: '/about'      },
  { label: 'Skills',     path: '/skills'     },
  { label: 'Projects',   path: '/projects'   },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact',    path: '/contact'    },
]

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/gopalmakwana2414',                                                                                       icon: '🐙' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gopal-makwana-929893291',                                                                        icon: '💼' },
  { label: 'WhatsApp', href: 'https://wa.me/918959465264?text=Hello%20Gopal,%20I%20visited%20your%20portfolio',                                            icon: '📱' },
  { label: 'Email',    href: 'mailto:gopalmakwanatech@gmail.com',                                                                                          icon: '✉️' },
]

export default function Footer() {
  const navigate = useNavigate()
  const year = new Date().getFullYear()

  const linkStyle = { background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: 14, color: '#64748b', fontFamily: 'var(--font-sans)', padding: '3px 0', display: 'block', transition: 'color 0.2s ease' }
  const socialStyle = { display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#64748b', textDecoration: 'none', padding: '3px 0', transition: 'color 0.2s ease' }
  const headingStyle = { fontSize: 11, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: 16, fontFamily: 'var(--font-mono)' }

  return (
    <footer style={{ background: '#0f172a', borderTop: '1px solid #1e293b', padding: '52px 24px 28px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, marginBottom: 44 }}>

          <div>
            <span
              onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              style={{ fontSize: 28, fontWeight: 800, cursor: 'pointer', color: '#ffffff', fontFamily: 'var(--font-display)', letterSpacing: '0.04em', display: 'inline-block', marginBottom: 12 }}
            >
              GM<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
            <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.75, fontFamily: 'var(--font-sans)', marginBottom: 14, maxWidth: 200 }}>
              Aspiring Software Engineer building scalable web applications with modern technologies.
            </p>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(220,252,231,0.08)', color: '#86efac', padding: '5px 13px', borderRadius: 99, fontSize: 12, fontWeight: 600, border: '1px solid rgba(22,163,74,0.25)' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }} />
              Open to Work
            </span>
          </div>

          <div>
            <p style={headingStyle}>NAVIGATE</p>
            {LINKS.map(l => (
              <button key={l.path} onClick={() => { navigate(l.path); window.scrollTo({ top: 0, behavior: 'smooth' }) }} style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                {l.label}
              </button>
            ))}
          </div>

          <div>
            <p style={headingStyle}>CONNECT</p>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={socialStyle} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                <span style={{ width: 18, textAlign: 'center' }}>{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>

          <div>
            <p style={headingStyle}>RESUME</p>
            <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7, fontFamily: 'var(--font-sans)', marginBottom: 16 }}>
              View or download my latest resume to learn more about my skills and experience.
            </p>
            <a
              href="/Gopal_Makwana_resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 10, background: 'transparent', color: 'var(--accent)', border: '1.5px solid var(--accent)', fontSize: 13, fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-sans)', transition: 'all 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#ffffff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)' }}
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1e293b', paddingTop: 22, textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: '#334155', fontFamily: 'var(--font-sans)', lineHeight: 1.8 }}>
            © {year} <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Gopal Makwana</span>. All rights reserved.
            <br />
            Built & Designed by <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Gopal Makwana</span> ⚡
          </p>
        </div>

      </div>
    </footer>
  )
}
