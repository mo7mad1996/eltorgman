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
      }).then((new_content) => res.json(new_content))
    )
    .catch((err) => res.json(err))
  );

  router.delete('/news/delete/:id',
    (req, res) => {
      // 1) remove from database
      News.findByIdAndDelete(req.params.id).then(data => res.json(data))
    })
};