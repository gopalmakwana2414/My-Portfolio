import { useNavigate } from 'react-router-dom'

const EXPERIENCE = {
  role:        'Web Development Intern (MERN Stack)',
  company:     'MXPERTZ Infolabs',
  location:    'Indore, India',
  duration:    'Oct 2025 – Dec 2025',
  certificate: '/internship_certificate.pdf',
  points: [
    'Developed responsive web interfaces using React, improving user experience and performance.',
    'Developed and maintained MERN stack applications using React, Node.js, Express, and MongoDB.',
    'Integrated APIs and handled dynamic data rendering across the application.',
    'Optimized application performance and resolved bugs through code refactoring.',
  ],
}

export default function Experience() {
  const navigate = useNavigate()
  const e = EXPERIENCE

  return (
    <section className="section" id="experience" style={{ background: 'var(--bg)' }}>
      <div className="section-inner">
        <p className="section-label">EXPERIENCE</p>
        <h2 className="section-title">Where I've worked</h2>

        <div style={{ background: 'var(--bg-card)', border: '1.5px solid var(--border)', borderRadius: 20, padding: '30px 34px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 22 }}>
            <div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{e.role}</h3>
              <p style={{ fontSize: 15, color: 'var(--accent)', fontWeight: 500 }}>{e.company} — {e.location}</p>
            </div>
            <span style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--accent)', padding: '6px 16px', borderRadius: 999, fontSize: 13, border: '1px solid rgba(99,102,241,0.2)' }}>
              {e.duration}
            </span>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 22 }}>
            {e.points.map((pt, i) => (
              <li key={i} style={{ display: 'flex', gap: 12 }}>
                <span style={{ color: 'var(--accent)', marginTop: 2 }}>▸</span>
                <span style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>{pt}</span>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={e.certificate} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '9px 18px', fontSize: 13 }}>
              📄 View Certificate
            </a>
            <a href={e.certificate} download className="btn btn-solid" style={{ padding: '9px 18px', fontSize: 13 }}>
              ⬇ Download
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 48 }}>
          <button onClick={() => navigate('/projects')} className="btn btn-outline" style={{ padding: '10px 22px', fontSize: 14 }}>← Projects</button>
          <button onClick={() => navigate('/contact')} className="btn btn-solid" style={{ padding: '10px 22px', fontSize: 14 }}>Contact →</button>
        </div>
      </div>
    </section>
  )
}
