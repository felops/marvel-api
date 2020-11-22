const { lambda } = require('../../../../heroes/controllers/get-hero.js')

describe('heroes/controllers/get-hero', () => {
  test('should return details about a hero', async () => {
    const items = [{
      id: 1,
      name: 'marvel1'
    }, {
      id: 1,
      name: 'marvel2'
    }]

    const getHeroService = jest.fn().mockResolvedValue({
      id: 202020,
      name: 'Spider-man',
      description: 'A spider-man that jumps around.',
      thumbnail: 'photo.jpg',
      comics: {
        available: 100,
        items,
      },
      series: {
        available: 100,
        items,
      },
      stories: {
        available: 100,
        items,
      },
      events: {
        available: 100,
        items,
      },
    })

    const response = await lambda(getHeroService)({
      pathParameters: {
        id: 'heroId',
      }
    })
    
    expect(getHeroService).toHaveBeenNthCalledWith(1, 'heroId')
    expect(response).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        name: 'Spider-man',
        description: 'A spider-man that jumps around.',
        thumbnail: 'photo.jpg',
        comics: {
          available: 100,
          items: ['marvel1', 'marvel2'],
        },
        series: {
          available: 100,
          items: ['marvel1', 'marvel2'],
        },
        stories: {
          available: 100,
          items: ['marvel1', 'marvel2'],
        },
        events: {
          available: 100,
          items: ['marvel1', 'marvel2'],
        },
      }),
    })
  })

  test('should return not found (404)', async () => {
    const getHeroService = jest.fn().mockRejectedValueOnce({
      response: {
        data: {
          code: 404,
        }
      },
    })

    const response = await lambda(getHeroService)({
      pathParameters: {
        id: 'heroId',
      }
    })

    expect(response).toEqual({
      statusCode: 404,
    })
  })

  test('should return 500', async () => {
    const getHeroService = jest.fn().mockRejectedValueOnce({
      response: {
        data: {
          code: 503,
        }
      },
    })

    const response = await lambda(getHeroService)({
      pathParameters: {
        id: 'heroId',
      }
    })

    expect(response).toEqual({
      statusCode: 500,
    })
  })
})
