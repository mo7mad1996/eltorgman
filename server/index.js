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
// const port = process.env.PORT || 3000;
// mQykk9iUKw7JEJ8T
const DB_URI = dev ?
  "mongodb://localhost/eltorgman" :
  "mongodb+srv://mo7mad1996:EFPp8t7shAAqKtDB@cluster0.5xltt.mongodb.net/?retryWrites=true&w=majority";

// ..:: connect to database ::..
mongoose.connect(
  DB_URI, {
    useNewUrlParser: true,
  },
  (err) => {
    if (err) console.log({
      err
    });
  }
);

// ..:: database modles ::..
require("./models/user");
require("./models/subject");
require("./models/news");

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
