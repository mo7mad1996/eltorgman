// ..:: packages ::..
const express = require("express");
const mongoose = require("mongoose");

// ..:: Constants ::..
const app = express();

const dev = true
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
require("./models/price");
require("./models/contact");

// ..:: middlewares ::..
require("./middlewares")(app);

// ..:: routes ::..
app.use("/api", require("./api"));
app.listen(3000)