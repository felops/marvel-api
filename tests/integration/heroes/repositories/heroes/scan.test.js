const DynamoDB = require('../../../dynamo-dynalite')
const scan = require('../../../../../heroes/repositories/heroes/scan')

describe('heroes/repositories/heroes/scan', () => {
  test('should return a list of heroes', async () => {
    const response = await scan(DynamoDB)()

    expect(response).toEqual([
      {
        id: 3,
        movie: 'avengers',
        name: 'Spider-man'
      },
      {
        id: 2,
        movie: 'guardians of the galaxy',
        name: 'Groot'
      },
      {
        id: 1,
        movie: 'x-men',
        name: 'Wolverine'
      },
    ])
  })
})
