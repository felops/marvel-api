const buildUrl = require('../utils/build-url')

module.exports = (fetch) => async () => {
  const { data: { data } } = await fetch.get(buildUrl('characters'))
  return data.results
}
