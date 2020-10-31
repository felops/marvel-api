const axios = require('axios')
const getHeroesService = require('../services/get-heroes')

const lambda = (getHeroes) => async () => {
  try {
    const heroes = await getHeroes()

    const processedHeroes = heroes.map(heroe => ({
      id: heroe.id,
      name: heroe.name,
      thumbnail: heroe.thumbnail
    }))

    return {
      statusCode: 200,
      body: JSON.stringify({
        featured: processedHeroes,
        xMen: processedHeroes,
        guardiansOfTheGalaxy: processedHeroes
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
