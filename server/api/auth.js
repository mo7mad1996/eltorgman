module.exports = (router) => {
  router.post("/auth/login", (req, res) => {
    // res.json(req.body);
    res.send(200);
  });

  router.get("/auth/user", (req, res) => {
    console.log(req.body, "action user");
    res.send({
      user: {
        id: "baby"
      }
    });
  });
  router.get("/auth/logout", (req, res) => {
    console.log(req.body, "action user");
    res.json({
      user: "baby"
    });
  });
};
