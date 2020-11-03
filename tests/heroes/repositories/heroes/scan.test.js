const scan = require('../../../../heroes/repositories/heroes/scan')

describe('heroes/repositories/heroes/scan', () => {
  test('should return a list of heroes', async () => {
    const DynamoDB = {
      scan: jest.fn(() => ({
        promise: jest.fn().mockResolvedValue({
          Items: [{
            id: 202020,
            name: 'Spider-man',
          }]
        })
      }))
    }

    const response = await scan(DynamoDB)()

    expect(DynamoDB.scan).toHaveBeenNthCalledWith(1, {
      TableName: 'marvel-heroes'
    })
    expect(response).toEqual([{
      id: 202020,
      name: 'Spider-man',
    }])
  })
})
