const url = require('../server-url')
const request = require('supertest')(url)
const json = require('./responses/get-hero.json')

describe('GET /hero/{id}', () => {
  test('should return details about a hero', async () => {
    const response = await request.get('/hero/1009610')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(json)
  })
})
