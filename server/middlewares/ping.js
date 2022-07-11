const axios = require('axios')

module.exports = () => setInterval(() => axios.get('https://filesaver3.herokuapp.com/'), 20 * 60 * 1000);