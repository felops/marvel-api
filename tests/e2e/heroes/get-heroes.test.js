const url = require('../server-url')
const request = require('supertest')(url)
const json = require('./responses/get-heroes.json')

describe('GET /heroes', () => {
  test('should return a list of heroes', async () => {
    const response = await request
      .get('/heroes')
      .set('origin', 'https://marvelflix-six.vercel.app')
      .query({
        offset: 5,
        limit: 10,
      })

    expect(response.status).toBe(200)
    expect(response.body).toEqual(json)
    expect(response.header).toEqual({
      'access-control-allow-credentials': 'true',
      'access-control-allow-headers': 'Content-Type',
      'access-control-allow-methods': 'OPTIONS,GET',
      'access-control-allow-origin': 'https://marvelflix-six.vercel.app',
      'cache-control': 'no-cache',
      'connection': 'close',
      'content-encoding': 'gzip',
      'content-type': 'application/json; charset=utf-8',
      'date': response.headers.date,
      'transfer-encoding': 'chunked',
      'vary': 'accept-encoding',
    })
  })

  test('should return 418', async () => {
    const response = await request
      .get('/heroes')
      .set('origin', 'http://localhost:3000')
      .query({
        offset: 5,
        limit: 10,
      })

    expect(response.status).toBe(418)
  })

  test('should return 500', async () => {
    const response = await request.get('/heroes')

    expect(response.status).toBe(500)
  })
})
