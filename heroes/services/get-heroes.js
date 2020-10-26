const axios = require('axios')
const buildUrl = require('../utils/build-url')

module.exports = async () => {
  const response = await axios.get(buildUrl('characters'))
  return response.data.data
}