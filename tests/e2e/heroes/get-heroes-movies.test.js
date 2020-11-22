const url = require('../server-url')
const request = require('supertest')(url)
const json = require('./responses/get-heroes-movies.json')

describe('GET /heroes/movies', () => {
  test('should return a list of heroes by movies', async () => {
    const response = await request.get('/heroes/movies')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(json)
  })
})
