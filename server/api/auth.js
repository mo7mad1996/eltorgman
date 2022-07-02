const becrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('user')


const secret = 'secret'


module.exports = (router) => {
  // Login
  router.post("/auth/login", async (req, res) => {
    const user = await User.findOne({
      username: req.body.username
    })

    // check if user exists
    if (!user) return res.status(401).end('لا يوجود مستخدم بهذا الاسم')

    // check password
    const ok = await becrypt.compare(req.body.password, user.password)
    if (!ok) return res.status(401).end('كلمة المرور خطأ')

    const token = JWT.sign({
      _id: user._id
    }, secret)

    res.json({
      token
    })
  });

  // logout
  router.delete("/auth/logout", (req, res) => res.end(''))
}