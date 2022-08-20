// ..:: packages ::..
const express = require("express");
const mongoose = require("mongoose");

// nuxt
const {
  Nuxt,
  Builder
} = require("nuxt");

// ..:: Constants ::..
const app = express();
const config = require("../nuxt.config");
let dev = config.dev;

const DB_URI = dev ?
  "mongodb://localhost/eltorgman" : process.env.DB_URI;

// ..:: connect to database ::..
mongoose.connect(
  DB_URI, {
    useNewUrlParser: true,
  }
);

// ..:: database modles ::..
require("./models/user");
require("./models/subject");
require("./models/news");
require("./models/price");
require("./models/contact");

// ..:: middlewares ::..
require("./middlewares")(app);

// ..:: routes ::..
app.use("/api", require("./api"));

start();

// ..:: start function ::..
async function start() {
  const nuxt = new Nuxt(config);
  const {
    host,
    port
  } = nuxt.options.server;

  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  app.use(nuxt.render);

  // ..:: Running server ::..
  app.listen(port, host, (_) => console.log("listening on port:", port));
}