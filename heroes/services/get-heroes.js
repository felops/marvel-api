const buildUrl = require('../utils/build-url')

module.exports = (fetch) => async (offset, limit) => {
  const { data: { data } } = await fetch.get(buildUrl('characters', offset, limit))
  return data.results
}
