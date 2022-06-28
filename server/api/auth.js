module.exports = (router) => {
  router.post("/auth/login", (req, res) => {
    // res.json(req.body);
    res.send(200);
  });

  router.get("/auth/user", (req, res) => {
    res.send({
      user: {
        id: "baby"
      }
    });
  });
  router.get("/auth/logout", (req, res) => {
    res.json({
      user: "baby"
    });
  });
};