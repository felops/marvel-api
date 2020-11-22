const url = require('../server-url')
const request = require('supertest')(url)
const json = require('./responses/get-heroes.json')

describe('GET /heroes', () => {
  test('should return a list of heroes', async () => {
    const response = await request.get('/heroes').query({
      offset: 5,
      limit: 10,
    })

    expect(response.status).toBe(200)
    expect(response.body).toEqual(json)
  })
})
