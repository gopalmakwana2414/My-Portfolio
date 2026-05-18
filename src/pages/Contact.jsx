import { useNavigate } from 'react-router-dom'

const CONTACTS = [
  { icon: '✉️', label: 'Email',    value: 'gopalmakwanatech@gmail.com',  href: 'mailto:gopalmakwanatech@gmail.com', badge: 'Quick Response' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/gopal-makwana-929893291', href: 'https://www.linkedin.com/in/gopal-makwana-929893291' },
  { icon: '🐙', label: 'GitHub',   value: 'github.com/gopalmakwana2414', href: 'https://github.com/gopalmakwana2414' },
  { icon: '📱', label: 'WhatsApp', value: '+91 8959465264',              href: 'https://wa.me/918959465264',        badge: 'Fastest' },
]

export default function Contact() {
  const navigate = useNavigate()

  return (
    <section className="section" id="contact" style={{ background: 'var(--bg-card)' }}>
      <div className="section-inner">
        <p className="section-label">CONTACT</p>
        <h2 className="section-title">Let's Connect</h2>

        <div style={{ maxWidth: 520 }}>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 28 }}>
            I'm actively seeking internship and full-time opportunities in software development.
            Feel free to reach out — I'd be happy to connect and discuss potential roles.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {CONTACTS.map(c => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="contact-row"
              >
                <span style={{ fontSize: 22 }}>{c.icon}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 11, color: 'var(--text-hint)', letterSpacing: '0.1em' }}>
                    {c.label.toUpperCase()}
                  </p>
                  <p style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>
                    {c.value}
                  </p>
                </div>
                {c.badge && (
                  <span style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--accent)', padding: '3px 10px', borderRadius: 999, fontSize: 11, fontWeight: 600 }}>
                    {c.badge}
                  </span>
                )}
              </a>
            ))}

            <a
              href="/Gopal Makwana_resume.pdf"
              download
              className="btn btn-solid"
              style={{ marginTop: 8, padding: '14px 20px', borderRadius: 14, display: 'flex', justifyContent: 'space-between', width: '100%' }}
            >
              <span>📄 Download Resume</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', marginTop: 48 }}>
          <button onClick={() => navigate('/experience')} className="btn btn-outline" style={{ padding: '10px 22px', fontSize: 14 }}>
            ← Experience
          </button>
        </div>
      </div>
    </section>
  )
}
