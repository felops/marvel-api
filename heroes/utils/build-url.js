const crypto = require('crypto')

const MARVEL_API_URL = process.env.MARVEL_API_URL
const PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY
const PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY

module.exports = (path) => {
  const timestamp = Date.now()
  const contentToHash = timestamp + PRIVATE_KEY + PUBLIC_KEY

  const hash = crypto.createHash('md5').update(contentToHash).digest("hex")

  return `${MARVEL_API_URL}/${path}?apikey=${PUBLIC_KEY}&ts=${timestamp}&hash=${hash}`
}