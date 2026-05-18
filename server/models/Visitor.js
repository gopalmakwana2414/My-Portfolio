import { Schema, model } from 'mongoose'

const VisitorSchema = new Schema({
  time:      { type: Date,   default: Date.now },
  ref:       { type: String, default: 'direct' },
  userAgent: { type: String, default: '' },
  ip:        { type: String, default: '' },
  page:      { type: String, default: '/' },
})

export default model('Visitor', VisitorSchema)
