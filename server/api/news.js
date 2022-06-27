const formidable = require("formidable");
const path = require("path");
const mongoose = require("mongoose");
const News = mongoose.model("news");
const fs = require('fs')


module.exports = (router) => {

  router.get("/news", (req, res) => {
    News.find()
      .limit()
      .sort({
        date: -1
      })
      .then((news) => res.json(news));
  });

  router.post("/news/add", (req, res) => {
    const form = formidable({
      uploadDir: path.join(__dirname, "../../static/news"),
      keepExtensions: true,
      // filename: (name, ext) => name + ext,
    });

    form.parse(req, (err, fields, files) => {

      let img = "";
      if (files.file) img = "/news/" + files.file.newFilename;

      data = Object.assign(fields, {
        img
      });

      new News(data)
        .save()
        .then((news) => res.json({
          saved: true,
          data: news
        }))
        .catch((err) => res.json({
          saved: false,
          data: err
        }));
    });
  });

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
      }).then((new_content) => res.json(new_content))
    )
    .catch((err) => res.json(err))
  );

  router.delete('/news/delete/:id',
    (req, res) => {
      // 1) remove from database
      News.findByIdAndDelete(req.params.id).then(data => {
        // 2) remoeve the img
        fs.unlink(__dirname + '/../../static' + data.img, () => res.json(data))
      })
    })
};