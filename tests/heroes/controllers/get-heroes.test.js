const { lambda } = require('../../../heroes/controllers/get-heroes.js')

describe('heroes/controllers/get-heroes', () => {
  test('should build the url corretly for characters', async () => {
    const spiderMan = {
      id: 202020,
      name: 'Spider-man',
      thumbnail: 'photo.jpg',
    }
    const getHeroesService = jest.fn().mockResolvedValue([{
      ...spiderMan,
      description: '',
      comics: {},
    }])

    const response = await lambda(getHeroesService)()
    
    expect(response).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        featured: [spiderMan],
        xMen: [spiderMan],
        guardiansOfTheGalaxy: [spiderMan],
      }),
    })
  })
})