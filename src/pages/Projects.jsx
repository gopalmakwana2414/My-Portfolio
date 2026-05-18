import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PROJECTS = [
  {
    title:    'Matakheda Mandir Website',
    badge:    'Full Stack',
    desc:     'A full-stack temple website developed to manage user interactions, donations, and information display. Provides a smooth and responsive experience with real-time data handling and secure backend integration.',
    features: [
      'User-friendly and responsive UI',
      'Online donation system',
      'Dynamic data handling using MongoDB',
      'Backend API integration using Node.js and Express',
      'Deployment using Vercel and Railway',
    ],
    stack:  ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel', 'Railway'],
    demo:   'https://matakheda-mandir-tukral.vercel.app/',
    code:   'https://github.com/gopalmakwana2414/temple-website',
    image:  '/images/mandir.png',
    accent: '#6366f1',
  },

  // PROJECT 2 — uncomment & fill when ready
  // {
  //   title:    'Your Next Project',
  //   badge:    'Frontend',
  //   desc:     'Short 2–3 line description.',
  //   features: ['Feature one', 'Feature two', 'Feature three'],
  //   stack:    ['React', 'Node.js', 'MongoDB'],
  //   demo:     'https://your-live-link.vercel.app',
  //   code:     'https://github.com/gopalmakwana2414/your-repo',
  //   image:    '/images/project2.png',
  //   accent:   '#10b981',
  // },

  // PROJECT 3 — uncomment & fill when ready
  // {
  //   title:    'Another Project',
  //   badge:    'Full Stack',
  //   desc:     'Short 2–3 line description.',
  //   features: ['Feature one', 'Feature two', 'Feature three'],
  //   stack:    ['React', 'Firebase', 'CSS'],
  //   demo:     'https://your-live-link.vercel.app',
  //   code:     'https://github.com/gopalmakwana2414/your-repo',
  //   image:    '/images/project3.png',
  //   accent:   '#f59e0b',
  // },
]

function ProjectCard({ title, badge, desc, features, stack, demo, code, accent, image }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-card)',
        border: `1.5px solid ${hovered ? accent : 'var(--border)'}`,
        borderRadius: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column',
        transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 48px ${accent}22` : 'none',
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
        <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
          <img
            src={image} alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.5s ease', transform: hovered ? 'scale(1.03)' : 'scale(1)' }}
          />
        </div>
      </div>

      <div style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>{title}</h3>
          <span style={{ padding: '4px 12px', borderRadius: 99, background: accent, color: 'white', fontSize: 11, fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>{badge}</span>
        </div>
        <div style={{ height: 2, width: 36, background: accent, borderRadius: 99, marginBottom: 14 }} />

        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 18 }}>{desc}</p>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: accent, letterSpacing: '0.12em', marginBottom: 10 }}>KEY FEATURES</p>
        <ul style={{ listStyle: 'none', marginBottom: 20, display: 'flex', flexDirection: 'column', gap: 7 }}>
          {features.map(f => (
            <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: accent, flexShrink: 0, marginTop: 5 }} />
              {f}
            </li>
          ))}
        </ul>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: accent, letterSpacing: '0.12em', marginBottom: 10 }}>TECH STACK</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 24 }}>
          {stack.map(t => (
            <span key={t} style={{ background: 'var(--bg-surface)', color: 'var(--text-muted)', padding: '5px 11px', borderRadius: 8, fontSize: 12, fontFamily: 'var(--font-mono)', border: '1px solid var(--border)', transition: 'border-color 0.2s, color 0.2s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
            >{t}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 'auto', flexWrap: 'wrap' }}>
          <a href={demo} target="_blank" rel="noreferrer" className="btn btn-solid" style={{ flex: 1, minWidth: 120, padding: '11px 0', fontSize: 14, textAlign: 'center' }}>🔗 Live Demo</a>
          <a href={code} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ flex: 1, minWidth: 120, padding: '11px 0', fontSize: 14, textAlign: 'center' }}>💻 GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const navigate = useNavigate()
  const isSingle = PROJECTS.length === 1

  return (
    <section className="section" id="projects" style={{ background: 'var(--bg-card)' }}>
      <div className="section-inner">
        <p className="section-label">PROJECTS ⭐</p>
        <h2 className="section-title">Things I've built</h2>

        <div style={{ display: 'grid', gridTemplateColumns: isSingle ? 'minmax(0, 740px)' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28, justifyContent: isSingle ? 'center' : 'start', margin: isSingle ? '0 auto' : '0', width: '100%' }}>
          {PROJECTS.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 56, flexWrap: 'wrap', gap: 12 }}>
          <button onClick={() => navigate('/skills')} className="btn btn-outline" style={{ padding: '10px 22px', fontSize: 14 }}>← Skills</button>
          <button onClick={() => navigate('/experience')} className="btn btn-solid" style={{ padding: '10px 22px', fontSize: 14 }}>Experience →</button>
        </div>
      </div>
    </section>
  )
}
