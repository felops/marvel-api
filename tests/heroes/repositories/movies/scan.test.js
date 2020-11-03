const scan = require('../../../../heroes/repositories/movies/scan')

describe('heroes/repositories/movies/scan', () => {
  test('should return a list of movies', async () => {
    const DynamoDB = {
      scan: jest.fn(() => ({
        promise: jest.fn().mockResolvedValue({
          Items: [{
            name: 'avengers',
            name: 'x-men',
          }]
        })
      }))
    }

    const response = await scan(DynamoDB)()

    expect(DynamoDB.scan).toHaveBeenNthCalledWith(1, {
      TableName: 'marvel-movies'
    })
    expect(response).toEqual([{
      name: 'avengers',
      name: 'x-men',
    }])
  })
})
