const path = require("path");
const axios = require('axios')
const mongoose = require("mongoose");
const News = mongoose.model("news");
const formidable = require('formidable')
const cloudinary = require("cloudinary").v2;
cloudinary.config().cloud_name

module.exports = (router) => {

  router.get("/news", (req, res) => {
    News.find()
      .sort({
        date: -1
      })
      .then(news => {
        // remove the old news
        res.json(
          remove_old(news)
        )
      })
      .catch(err => res.status(500).json(err))
  });

  router.post("/news/add", (req, res) => {
    new News(req.body).save().then(data => res.json(data)).catch(err => console.log(err))
  });

  router.put('/news/update/:id', (req, res) => {
    News.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.json({
          done: true
        })
      })
      .catch(err => {
        res.status(401).json({
          done: false
        })
      })
  })

  router.get("/news/new", (req, res) =>
    News.find()
    .limit(+req.query.limit)
    .sort({
      date: -1
    })
    .then((news) => res.json(news))
  );

  router.get("/single_news/:id", (req, res) =>
    News.findById(req.params.id)
    .then((single_news) =>
      News.findByIdAndUpdate(req.params.id, {
        views: single_news.views + 1,
      })
      .then((new_content) => res.json(new_content))
      .catch(err => res.status(500).json(err))
    )
    .catch(err => res.status(500).json(err))
  );

  router.delete('/news/delete/:id',
    (req, res) => {
      // 1) remove from database
      News
        .findByIdAndDelete(req.params.id)
        .then(data => {
          const
            arr = data.img.split('/'),
            img_name = arr[arr.length - 1],
            img_id = img_name.split('.')[0]

          cloudinary.uploader.destroy(img_id, {}, (err) => {
            if (err) return res.status(500).json(err)
            res.json(data)
          })
        })
        .catch(err =>
          res.status(500).json(err)
        )
    })


  router.post("/save_file", (req, res) => {

    const file_name = '../../static/news/'
    const uploadDir = path.join(__dirname, file_name)

    const form = formidable({
      uploadDir,
      keepExtensions: true,
      // filename: (name, ext) => name + ext,
    });

    form.parse(req, (err, fields, files) => {

      cloudinary.uploader.upload(path.join(__dirname, file_name) + files.file.newFilename, {}, (err, result) => {
        res.json({
          file: result.url
        })
      })

    });
  })
};

function remove_old(news) {
  const one_month = 30 * 24 * 60 * 60 * 1000

  const ok = []

  news.forEach(s => {
    if (new Date(s.date).valueOf() < Date.now() - one_month) {
      axios.delete('/api/news/delete/' + s._id)
    } else {
      ok.push(s)
    }
  })

  return ok
}