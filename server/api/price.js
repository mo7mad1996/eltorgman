const mongoose = require('mongoose')
const Prices = mongoose.model('price')

module.exports = (router) => {
  router.get('/prices', (req, res) => Prices.find().then(prices => res.json(prices)))
  router.post('/prices/add', (req, res) => new Prices(req.body).save().then(price => res.json(price)))
  router.delete('/prices/delete/:id', (req, res) => Prices.findByIdAndDelete(req.params.id).then(price => res.json(price)))
  router.patch('/prices/:id', (req, res) => Prices.findByIdAndUpdate(req.params.id, Object.assign(req.body, {
    lastUpdate: Date.now()
  })).then(price => res.json(price)))
}