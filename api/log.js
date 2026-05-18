import mongoose from 'mongoose'
import nodemailer from 'nodemailer'

const MONGO_URI  = 'mongodb+srv://gopalmakwana98765_db_user:SeMWHRaDMENMt2rj@cluster0.bmprhqe.mongodb.net/portfolio'
const EMAIL_USER = 'gopalmakwanatech@gmail.com'
const EMAIL_PASS = 'xmabunqkcuhdjrak'

const VisitorSchema = new mongoose.Schema({
  time:      { type: Date,   default: Date.now },
  ref:       { type: String, default: 'direct' },
  userAgent: { type: String, default: '' },
  ip:        { type: String, default: '' },
  page:      { type: String, default: '/' },
})

const Visitor = mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema)

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return
  await mongoose.connect(MONGO_URI)
}

async function sendEmail(data) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    })
    const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    await transporter.sendMail({
      from:    `"Portfolio Tracker" <${EMAIL_USER}>`,
      to:      EMAIL_USER,
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
  } catch (err) {
    console.error('Email failed:', err.message)
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const data = {
    ref:       req.body?.ref  || 'direct',
    page:      req.body?.page || '/',
    userAgent: req.headers['user-agent'] || '',
    ip:        req.headers['x-forwarded-for']?.split(',')[0] || '',
  }

  sendEmail(data)

  try {
    await connectDB()
    await Visitor.create(data)
  } catch (err) {
    console.error('DB save failed:', err.message)
  }

  res.json({ ok: true })
}
