import { useNavigate } from 'react-router-dom'
import { useTyping } from '../hooks/useTyping'

export default function Hero() {
  const navigate = useNavigate()
  const typed = useTyping(['React Developer', 'Web Developer'], 85, 1800)

  return (
    <section className="section" id="home" style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 100 }}>
      <div className="hero-flex" style={{ maxWidth: 1000, margin: '0 auto', width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 48, justifyContent: 'space-between' }}>

        <div style={{ flex: '1 1 340px' }}>
          <p className="anim-fadeup" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: 16 }}>
            👋 HELLO, I'M
          </p>
          <h1 className="anim-fadeup" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(38px,6vw,62px)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.05, marginBottom: 10 }}>
            Gopal<br />
            <span style={{ color: 'var(--accent)' }}>Makwana</span>
          </h1>
          <p className="anim-fadeup" style={{ fontSize: 18, fontWeight: 500, color: 'var(--text-muted)', marginBottom: 6 }}>
            Aspiring Software Engineer
          </p>
          <p className="anim-fadeup" style={{ fontSize: 16, color: 'var(--accent)', fontWeight: 500, marginBottom: 14, minHeight: 26 }}>
            {typed}<span className="cursor" />
          </p>
          <p className="anim-fadeup" style={{ fontSize: 15, color: 'var(--text-hint)', lineHeight: 1.8, maxWidth: 460, marginBottom: 28 }}>
            I build scalable web applications and solve real-world problems using modern technologies.
          </p>
          <div style={{ marginBottom: 22 }}>
            <span style={{ background: '#dcfce7', color: '#166534', padding: '5px 14px', borderRadius: 999, fontSize: 12, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }} />
              Open to Work
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <a href="/Gopal Makwana_resume.pdf" download className="btn btn-solid">Resume ↓</a>
            <a href="https://github.com/gopalmakwana2414" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
            <a href="https://www.linkedin.com/in/gopal-makwana-929893291" target="_blank" rel="noreferrer" className="btn btn-sky">LinkedIn</a>
          </div>
        </div>

        <div>
          <div style={{ width: 220, height: 220, borderRadius: '50%', border: '3px solid var(--accent)', overflow: 'hidden' }}>
            <img src="/images/my_photo.jpeg" alt="Gopal Makwana" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      <div style={{ 
  position: 'absolute', 
  bottom: 32, 
  left: '50%', 
  transform: 'translateX(-50%)',
  display: 'none'  
}} className="scroll-arrow">
  <button onClick={() => navigate('/about')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent)', fontSize: 24 }}>↓</button>
</div>
    </section>
  )
}
