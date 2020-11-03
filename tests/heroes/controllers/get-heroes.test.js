const { lambda } = require('../../../heroes/controllers/get-heroes.js')

describe('heroes/controllers/get-heroes', () => {
  test('should return a list of heroes', async () => {
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

    const response = await lambda(getHeroesService)({
      queryStringParameters: {
        offset: 20,
        limit: 20, 
      }
    })

    expect(getHeroesService).toHaveBeenNthCalledWith(1, 20, 20)
    expect(response).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        heroes: [spiderMan],
      }),
    })
  })

  test('should return 500', async () => {
    expect(await lambda()()).toEqual({
      statusCode: 500,
    })
  })
})
