const { lambda } = require('../../../heroes/controllers/get-heroes.js')

describe('heroes/controllers/get-heroes', () => {
  test('should build the url corretly for characters', async () => {
    const getHeroesService = jest.fn().mockResolvedValue({
      character: {
        id: 202020,
        name: 'Spider-man',
      }
    })

    const response = await lambda(getHeroesService)()
    
    expect(response).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        character: {
          id: 202020,
          name: 'Spider-man',
        }
      }),
    })
  })
})