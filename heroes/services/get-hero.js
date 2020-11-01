const buildUrl = require('../utils/build-url')

module.exports = (fetch) => async (id) => {
  const { data: { data } } = await fetch.get(buildUrl(`characters/${id}`))
  return data.results[0]
}
