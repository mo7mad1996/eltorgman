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
}