const getHeroesService = require('../../../heroes/services/get-heroes.js')

describe('heroes/services/get-heroes', () => {
  test('should build the url corretly for characters', async () => {
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

    const response = await getHeroesService(fetch)()
    
    expect(response).toMatchObject([{
      id: 202020,
      name: 'Spider-man',
    }])
  })
})