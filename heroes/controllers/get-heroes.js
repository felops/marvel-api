const axios = require('axios')
const getHeroesService = require('../services/get-heroes')

const lambda = (getHeroes) => async (event) => {
  try {
    const {
      offset,
      limit,
    } = event.queryStringParameters
    const heroes = await getHeroes(offset, limit)

    return {
      statusCode: 200,
      body: JSON.stringify({
        heroes: heroes.map(hero => ({
          id: hero.id,
          name: hero.name,
          thumbnail: hero.thumbnail
        }))
      })
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
