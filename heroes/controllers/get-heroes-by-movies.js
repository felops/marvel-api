const DynamoDB = require('aws-sdk/clients/dynamodb')
const scanMovies = require('../repositories/movies/scan')
const scanHeroes = require('../repositories/heroes/scan')

const lambda = (getMovies, getHeroesByMovies) => async () => {
  try {
    const movies = await getMovies()
    const heroes = await getHeroesByMovies()

    const response = movies.map(({ name }) => ({
      movie: name,
      heroes: heroes.filter(hero => hero.movie === name)
    }))

    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
  } catch (e) {
    return {
      statusCode: 500
    }
  }
}

const dynamodb = new DynamoDB.DocumentClient()

module.exports = {
  handler: lambda(
    scanMovies(dynamodb),
    scanHeroes(dynamodb),
  ),
  lambda,
}
