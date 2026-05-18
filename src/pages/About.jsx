import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()

  return (
    <section className="section" id="about" style={{ background: 'var(--bg-card)' }}>
      <div className="section-inner">
        <p className="section-label">ABOUT</p>
        <h2 className="section-title">Who I am</h2>

        <div style={{ background: 'var(--bg)', border: '1.5px solid var(--border)', borderRadius: 20, padding: '32px 36px' }}>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 14 }}>
            I am an Integrated M.Tech student in Software Engineering at VIT Bhopal with a strong interest in building scalable web applications and solving real-world problems. I enjoy working with modern technologies like React and continuously improving my problem-solving skills through Data Structures and Algorithms.
          </p>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 22 }}>
            I am currently seeking opportunities in product-based companies where I can contribute to impactful projects and grow as a software developer.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              '📍 Bhopal, India',
              '🎓 Integrated M.Tech in Software Engineering — VIT Bhopal',
            ].map(chip => (
              <span key={chip} style={{ fontSize: 12, color: 'var(--accent)', background: 'rgba(99,102,241,0.08)', padding: '6px 12px', borderRadius: 8, border: '1px solid rgba(99,102,241,0.15)' }}>
                {chip}
              </span>
            ))}
            <span
              onClick={() => window.open('/certificate.pdf', '_blank')}
              style={{ fontSize: 12, color: 'var(--accent)', background: 'rgba(99,102,241,0.08)', padding: '6px 12px', borderRadius: 8, border: '1px solid rgba(99,102,241,0.15)', cursor: 'pointer' }}
            >
              💼 MERN Stack Trainee — MXPERTZ Infolabs
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 48 }}>
          <button onClick={() => navigate('/')} className="btn btn-outline" style={{ padding: '10px 22px', fontSize: 14 }}>← Home</button>
          <button onClick={() => navigate('/skills')} className="btn btn-solid" style={{ padding: '10px 22px', fontSize: 14 }}>Skills →</button>
        </div>
      </div>
    </section>
  )
}
