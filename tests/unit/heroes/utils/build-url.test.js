const buildUrl = require('./../../../../heroes/utils/build-url.js')

describe('heroes/utils/build-url', () => {
  beforeAll(() => {
    jest.spyOn(global.Date, 'now').mockImplementation(() => 1603928188325)
  })
  
  afterAll(() => {
    jest.clearAllMocks()
  })

  test('should build the url corretly for characters', () => {
    expect(buildUrl('characters'))
      .toBe('https://www.marvel.com/characters?apikey=publicKey&ts=1603928188325&hash=decad3a154baa9fdcfba895b70e7fe1e&offset=0&limit=100')
  })

  test('should build the url corretly for characters with parameters', () => {
    expect(buildUrl('characters', 50, 50))
      .toBe('https://www.marvel.com/characters?apikey=publicKey&ts=1603928188325&hash=decad3a154baa9fdcfba895b70e7fe1e&offset=50&limit=50')
  })

  test('should build the url corretly for characters/2020202020', () => {
    expect(buildUrl('characters/2020202020'))
      .toBe('https://www.marvel.com/characters/2020202020?apikey=publicKey&ts=1603928188325&hash=decad3a154baa9fdcfba895b70e7fe1e&offset=0&limit=100')
  })
})
