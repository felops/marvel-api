const axios = require('axios')
const getHeroesService = require('../services/get-heroes')

const lambda = (getHeroes) => async (event) => {
  try {
    const {
      headers: { origin },
      queryStringParameters: { offset, limit },
    } = event

    const allowedOrigins = [
      'https://marvelflix-six.vercel.app',
      'https://marvelflix.felops.vercel.app',
      'https://marvelflix-git-main.felops.vercel.app',
    ]

    if (allowedOrigins.includes(origin)) {
      const heroes = await getHeroes(offset, limit)

      return {
        headers: {
          'Access-Control-Allow-Headers' : 'Content-Type',
          'Access-Control-Allow-Origin': origin,
          'Access-Control-Allow-Methods': 'OPTIONS,GET'
        },
        statusCode: 200,
        body: JSON.stringify({
          heroes: heroes.map(hero => ({
            id: hero.id,
            name: hero.name,
            thumbnail: hero.thumbnail
          }))
        })
      }
    }

    return {
      statusCode: 418
    }
  } catch (e) {
    return {
      statusCode: 500
    }
  }
}

module.exports = {
  handler: lambda(getHeroesService(axios)),
  lambda,
}
