const getHeroService = require('../../../heroes/services/get-hero.js')

describe('heroes/services/get-hero', () => {
  test('should return anobject of the hero', async () => {
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
    
    expect(response).toMatchObject({
      id: 202020,
      name: 'Spider-man',
    })
  })
})
