const express = require("express");
const router = express.Router();
module.exports = router;

router.get("/", (req, res) => res.send("flag"));
router.post("/post", (req, res) => res.json(req.body));

// auth
require("./auth")(router);
require("./news")(router);
require("./project")(router);
require("./price")(router);