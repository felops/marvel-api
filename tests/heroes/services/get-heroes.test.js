const getHeroesService = require('../../../heroes/services/get-heroes.js')

describe('heroes/services/get-heroes', () => {
  test('should return an array of heroes', async () => {
    const fetch = {
      get: jest.fn().mockResolvedValue({
        data: {
          data: {
            results: [{
              id: 202020,
              name: 'Spider-man',
            }, {
              id: 101010,
              name: 'Iron Man',
            }]
          }
        }
      })
    }

    const response = await getHeroesService(fetch)()
    
    expect(response).toMatchObject([{
      id: 202020,
      name: 'Spider-man',
    }, {
      id: 101010,
      name: 'Iron Man',
    }])
  })
})
