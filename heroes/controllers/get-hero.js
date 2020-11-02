const axios = require('axios')
const getHeroService = require('../services/get-hero')
const sanitizeItems = require('../utils/sanitize-items')

const lambda = (getHero) => async (event) => {
  try {
    const { id } = event.pathParameters

    const hero = await getHero(id)
    const {
      name,
      description,
      thumbnail,
      comics,
      series,
      stories,
      events,
    } = hero

    return {
      statusCode: 200,
      body: JSON.stringify({
        name,
        description,
        thumbnail,
        comics: {
          available: comics.available,
          items: sanitizeItems(comics),
        },
        series: {
          available: series.available,
          items: sanitizeItems(series),
        },
        stories: {
          available: stories.available,
          items: sanitizeItems(stories),
        },
        events: {
          available: events.available,
          items: sanitizeItems(events),
        },
      })
    }
  } catch (e) {
    if(e.response.data.code === 404) {
      return {
        statusCode: 404
      }
    }

    return {
      statusCode: 500
    }
  }
}

module.exports = {
  handler: lambda(getHeroService(axios)),
  lambda,
}
