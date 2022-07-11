const packages = ["bodyParser", "cors", 'ping'];

module.exports = (app) =>
  packages.forEach((package) => require("./" + package)(app));