import { Router } from 'express'
import nodemailer from 'nodemailer'
import Visitor from '../models/Visitor.js'

const router = Router()

function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

async function sendVisitorEmail(data) {
  try {
    const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    await createTransporter().sendMail({
      from:    `"Portfolio Tracker" <${process.env.EMAIL_USER}>`,
      to:      process.env.EMAIL_USER,
      subject: `👀 Someone visited your portfolio!`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:auto;padding:24px;border:1px solid #e2e8f0;border-radius:12px;">
          <h2 style="color:#6366f1;margin-bottom:4px;">New Portfolio Visit 🚀</h2>
          <p style="color:#64748b;margin-top:0;">Someone just opened your portfolio</p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0"/>
          <table style="width:100%;font-size:14px;color:#334155;">
            <tr><td style="padding:6px 0;color:#94a3b8;width:120px">🕐 Time</td><td>${time} IST</td></tr>
            <tr><td style="padding:6px 0;color:#94a3b8">🌐 Referrer</td><td>${data.ref}</td></tr>
            <tr><td style="padding:6px 0;color:#94a3b8">📄 Page</td><td>${data.page}</td></tr>
            <tr><td style="padding:6px 0;color:#94a3b8">🖥 Device</td><td style="font-size:12px">${data.userAgent.slice(0, 80)}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0"/>
          <p style="font-size:12px;color:#94a3b8;text-align:center">Gopal Makwana — Portfolio Tracker</p>
        </div>
      `,
    })
    console.log('📬 Visitor email sent!')
  } catch (err) {
    console.error('❌ Email failed:', err.message)
  }
}

router.post('/log', async (req, res) => {
  const data = {
    ref:       req.body.ref  || 'direct',
    page:      req.body.page || '/',
    userAgent: req.headers['user-agent'] || '',
    ip:        req.headers['x-forwarded-for']?.split(',')[0] || req.socket?.remoteAddress || '',
  }

  sendVisitorEmail(data)

  try {
    await Visitor.create(data)
  } catch (err) {
    console.error('⚠️  DB save failed (works on deploy):', err.message)
  }

  res.json({ ok: true })
})

router.get('/stats', async (req, res) => {
  try {
    const startOfDay = new Date()
    startOfDay.setHours(0, 0, 0, 0)
    const [total, today, recent] = await Promise.all([
      Visitor.countDocuments(),
      Visitor.countDocuments({ time: { $gte: startOfDay } }),
      Visitor.find().sort({ time: -1 }).limit(20).lean(),
    ])
    res.json({ total, today, recent })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router
