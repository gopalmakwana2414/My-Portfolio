import { useNavigate } from 'react-router-dom'

const SKILLS = {
  Languages: ['C++', 'JavaScript'],
  Frontend:  ['HTML', 'CSS', 'React'],
  Backend:   ['Node.js', 'Express.js'],
  Database:  ['MongoDB'],
  Tools:     ['Git', 'GitHub', 'Vercel', 'Railway'],
}

export default function Skills() {
  const navigate = useNavigate()

  return (
    <section className="section" id="skills" style={{ background: 'var(--bg)' }}>
      <div className="section-inner">
        <p className="section-label">SKILLS</p>
        <h2 className="section-title">What I work with</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 18 }}>
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div
              key={cat}
              className="card"
              style={{ padding: 24, transition: 'transform 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: 14 }}>
                {cat.toUpperCase()}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {items.map(skill => <span key={skill} className="pill">{skill}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 48 }}>
          <button onClick={() => navigate('/about')} className="btn btn-outline" style={{ padding: '10px 22px', fontSize: 14 }}>← About</button>
          <button onClick={() => navigate('/projects')} className="btn btn-solid" style={{ padding: '10px 22px', fontSize: 14 }}>Projects →</button>
        </div>
      </div>
    </section>
  )
}
