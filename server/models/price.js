const mongoose = require('mongoose')
const Schema = mongoose.Schema

const price = new Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    default: ''
  },
  lastUpdate: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('price', price)