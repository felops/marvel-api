const get = require('../services/get-heroes')

exports.handler = async function(event, context) {
  try {
   const heroes = await get()

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