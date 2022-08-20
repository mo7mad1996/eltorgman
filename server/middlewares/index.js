const packages = ["bodyParser", "cors", 'dotenv'];

module.exports = (app) =>
  packages.forEach((package) => require("./" + package)(app));