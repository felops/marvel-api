const axios = require('axios')
const getHeroesService = require('../services/get-heroes')

const lambda = (getHeroes) => async () => {
  try {
   const heroes = await getHeroes()

    return {
      statusCode: 200,
      body: JSON.stringify(heroes)
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
