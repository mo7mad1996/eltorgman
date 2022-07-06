const becrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('user')


const secret = 'secret'


module.exports = (router) => {
  router.get('/auth/add_admin', async (req, res) => {
    const salt = await becrypt.genSalt(10)
    const password = await becrypt.hash('admin', salt)
    new User({
      username: 'admin',
      password,
      name: 'Mohamed'
    }).save().then(_ => res.end('done'))
  })

  // Login
  router.post("/auth/login", async (req, res) => {
    const user = await User.findOne({
      username: req.body.username
    })

    // check if user exists
    if (!user) return res.status(401).send('لا يوجود مستخدم بهذا الاسم')

    // check password
    const ok = await becrypt.compare(req.body.password, user.password)
    if (!ok) return res.status(401).send('كلمة المرور خطأ')

    const token = JWT.sign({
      _id: user._id
    }, secret)

    await User.findByIdAndUpdate(user._id, {
      lastLogin: Date.now()
    })

    res.json({
      token,
      lastLogin: user.lastLogin
    })
  });

  // logout
  router.delete("/auth/logout", (req, res) => res.end(''))
  router.get("/users/me", async (req, res) => {

    // 1) Get token
    const token = req.headers.authorization

    if (!token) return res.json({
      error: 'Not authorized'
    })

    // 2) Get id
    const {
      _id
    } = JWT.verify(token, secret)

    // 3) Get data
    const {
      name,
      username
    } = await User.findById(_id)

    // 4) send data
    res.json({
      name,
      username
    })
  })

  router.post('/users/update', async (req, res) => {
    // 1) Get token
    const token = req.headers.authorization

    if (!token) return res.json({
      error: 'Not authorized'
    })


    // 2) Get id
    const {
      _id
    } = JWT.verify(token, secret)

    // 3) hash the password
    const salt = await becrypt.genSalt(10)
    const newPass =
      req.body.newPass
    const password = await becrypt.hash(newPass, salt)

    // 4) Get user
    User.findById(_id).then(async user => {
      // 5) check if password is ok
      const ok = await becrypt.compare(req.body.password, user.password)
      const to_update = {
        name: req.body.name,
      }
      if (newPass) to_update.password = password
      if (req.body.user != user.username) to_update.username = req.body.username

      if (ok)
        User.findByIdAndUpdate(_id, to_update).then(_ => res.json({
          done: true
        })).catch(_ => res.status(401).json({
          done: false
        }))
      else res.status(401).json({
        done: false
      })
    })
  })
}