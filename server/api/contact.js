const mongoose = require("mongoose")
const Contact = mongoose.model('contact')

module.exports = (router) => {

  router.get('/contact', (req, res) => Contact.find().sort({
      date: -1
    })
    .then(data => res.json(data))
    .catch(err => res.status(err.status).json(err)))

  router.get('/contact/unread', (req, res) => Contact.find({
      unread: true
    })
    .then(data => res.json(!!data.length))
    .catch(err => res.status(err.status).json(err)))


  router.post('/contact', (req, res) => {
    new Contact(req.body).save().then(data => {
      res.json({
        sent: !!data
      })
    }).catch(err => res.status(err.status).json(err))
  })

  router.delete('/contact/:id', (req, res) => Contact.findByIdAndDelete(req.params.id).then(data => res.json(data)))

  router.post('/contact/:id',
    (req, res) => {
      Contact
        .findByIdAndUpdate(req.params.id, {
          unread: false
        })
        .then(data => res.json(data))
        .catch(err => res.status(err.status).json(err))

    }
  )
}