const getHeroService = require('../../../../heroes/services/get-hero.js')

describe('heroes/services/get-hero', () => {
  test('should return an object of the hero', async () => {
    const fetch = {
      get: jest.fn().mockResolvedValue({
        data: {
          data: {
            results: [{
              id: 202020,
              name: 'Spider-man',
            }]
          }
        }
      })
    }

    const response = await getHeroService(fetch)()
    
    expect(response).toEqual({
      id: 202020,
      name: 'Spider-man',
    })
  })
})
