import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import dotenv from 'dotenv'

const __dirname = dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: join(__dirname, '.env') })

process.env.EMAIL_USER = 'gopalmakwanatech@gmail.com'
process.env.EMAIL_PASS = 'xmabunqkcuhdjrak'
process.env.MONGO_URI  = 'mongodb+srv://gopalmakwana98765_db_user:SeMWHRaDMENMt2rj@cluster0.bmprhqe.mongodb.net/portfolio'

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import visitorRoutes from './routes/visitors.js'

const app  = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/visitors', visitorRoutes)
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('⚠️  MongoDB unavailable (works on deploy):', err.message))
