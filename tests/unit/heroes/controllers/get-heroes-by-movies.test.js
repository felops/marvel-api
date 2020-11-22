const { lambda } = require('../../../../heroes/controllers/get-heroes-by-movies.js')

describe('heroes/controllers/get-heroes-by-movies', () => {
  test('should return a list of heroes by movies', async () => {
    const getMovies = jest.fn().mockResolvedValue([
      { name: 'avengers' },
      { name: 'x-men' },
    ])
    const getHeroesByMovies = jest.fn().mockResolvedValue([{
      id: 101010,
      name: 'Wolverine',
      movie: 'x-men',
      thumbnail: 'photo.jpg',
    }, {
      id: 202020,
      name: 'Spider-man',
      movie: 'avengers',
      thumbnail: 'photo.jpg',
    }])

    const response = await lambda(getMovies, getHeroesByMovies)()
    
    expect(getMovies).toHaveBeenNthCalledWith(1)
    expect(getHeroesByMovies).toHaveBeenNthCalledWith(1)
    expect(response).toEqual({
      statusCode: 200,
      body: JSON.stringify([{
        movie: 'avengers',
        heroes: [{
          id: 202020,
          name: 'Spider-man',
          movie: 'avengers',
          thumbnail: 'photo.jpg',
        }],
      }, {
        movie: 'x-men',
        heroes: [{
          id: 101010,
          name: 'Wolverine',
          movie: 'x-men',
          thumbnail: 'photo.jpg',
        }],
      }]),
    })
  })

  test('should return 500', async () => {
    const getMovies = jest.fn().mockRejectedValue()
    const getHeroesByMovies = jest.fn()

    const response = await lambda(getMovies, getHeroesByMovies)()
    
    expect(response).toEqual({
      statusCode: 500,
    })
  })
})
