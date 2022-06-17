const packages = ["bodyParser", "cors"];

module.exports = (app) =>
  packages.forEach((package) => require("./" + package)(app));
