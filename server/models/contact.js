const mongose = require('mongoose')
const Schema = mongose.Schema

const contact = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  unread: {
    type: Boolean,
    default: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  msg: {
    type: String,
    required: true
  },
})

mongose.model('contact', contact)