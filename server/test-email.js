import nodemailer from 'nodemailer'

const EMAIL_USER = 'gopalmakwanatech@gmail.com'
const EMAIL_PASS = 'xmabunqkcuhdjrak'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
})

transporter.verify((err, success) => {
  if (err) {
    console.error('❌ Gmail connection failed:', err.message)
  } else {
    console.log('✅ Gmail connected! Sending test email...')
    transporter.sendMail({
      from:    EMAIL_USER,
      to:      EMAIL_USER,
      subject: '✅ Portfolio email test',
      html:    '<h2>It works!</h2><p>Your portfolio email tracking is working correctly.</p>',
    }).then(() => {
      console.log('📬 Test email sent! Check your inbox.')
    }).catch(e => {
      console.error('❌ Send failed:', e.message)
    })
  }
})
