const sanitizeItems = require('../../../heroes/utils/sanitize-items.js')

describe('heroes/utils/sanitize-items', () => {
  test('should return only the item names', () => {
    const object = {
      count: 10,
      source: 'marvel',
      items: [{
        id: 1,
        name: 'marvel1'
      }, {
        id: 1,
        name: 'marvel2'
      }]
    }

    expect(sanitizeItems(object)).toStrictEqual(['marvel1', 'marvel2'])
  })
})
