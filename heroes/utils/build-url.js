const crypto = require('crypto')

const {
  MARVEL_API_URL,
  MARVEL_PRIVATE_KEY,
  MARVEL_PUBLIC_KEY,
} = process.env

module.exports = (path, offset = 0, limit = 100) => {
  const timestamp = Date.now()
  const contentToHash = timestamp + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY

  const hash = crypto.createHash('md5').update(contentToHash).digest("hex")

  return `${MARVEL_API_URL}/${path}?apikey=${MARVEL_PUBLIC_KEY}&ts=${timestamp}&hash=${hash}&offset=${offset}&limit=${limit}`
}
