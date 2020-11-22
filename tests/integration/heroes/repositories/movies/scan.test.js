const DynamoDB = require('../../../dynamo-dynalite')
const scan = require('../../../../../heroes/repositories/movies/scan')

describe('heroes/repositories/movies/scan', () => {
  test('should return a list of movies', async () => {
    const response = await scan(DynamoDB)()

    expect(response).toEqual([
      { name: 'guardians of the galaxy' },
      { name: 'avengers' },
      { name: 'x-men' },
    ])
  })
})
