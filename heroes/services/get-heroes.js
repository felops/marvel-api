const buildUrl = require('../utils/build-url')

module.exports = (fetch) => async () => {
  const { data } = await fetch.get(buildUrl('characters'))
  return data.data.results
}
