import { Schema, model } from 'mongoose'

const MessageSchema = new Schema({
  name:    { type: String, required: true },
  email:   { type: String, required: true },
  message: { type: String, required: true },
  sentAt:  { type: Date,   default: Date.now },
})

export default model('Message', MessageSchema)
