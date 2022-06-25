const mongoose = require("mongoose");
const Subject = mongoose.model("subject");

module.exports = (router) => {
  router.get("/subjects/top", (req, res) =>
    Subject.find()
    .limit(+req.query.limit)
    .sort({
      vist: -1,
    })
    .then((subjects) => res.json(subjects))
  );

  router.get("/subjects/new", (req, res) =>
    Subject.find()
    .sort({
      date: -1,
    })
    .limit(+req.query.limit)
    .then((subjects) => res.json(subjects))
  );
  router.get("/subjects", (req, res) =>
    Subject.find()
    .then((subjects) => res.json(subjects))
    .catch((err) => console.log(err))
  );

  router.get("/single_subject/:id", (req, res) => {
    Subject.findById(req.params.id)
      .then((data) => {
        Subject.findByIdAndUpdate(req.params.id, {
          vist: data.vist + 1
        }).then(
          (update) => res.json(update)
        );
      })
      .catch((err) => res.json(err));
  });

  router.post("/add/project", (req, res) =>
    new Subject(req.body)
    .save()
    .then((data) => res.json({
      saved: true,
      data
    }))
    .catch((err) => res.json({
      saved: false,
      data: err
    }))
  );

  router.post("/subjects/search", async (req, res) => {

    const sections = await Subject.find({
      '$or': [{
          title: {
            $regex: req.body.search
          }
        },
        {
          subtitle: {
            $regex: req.body.search
          }
        },
        {
          content: {
            $regex: req.body.search
          }
        },
      ]
    }).sort({
      date: -1
    });

    res.json(sections)
  })
  router.post("/subjects/filter", (req, res) =>
    Subject.find(req.body)
    .then(sections => res.json(sections))
    .catch(err => console.log(err))
  )


  router.delete("/subjects/delete/:id", (req, res) =>
    Subject.findByIdAndDelete(req.params.id).then((subjects) =>
      res.json(subjects)
    )
  );
};