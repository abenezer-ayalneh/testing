import {googleSearch} from "./script";

const dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com'
]

describe('Google Search', () => {
  it('is a silly test', () => {
    expect('hello').toBe('hello')
  })
  
  it('is searching google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([])
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
  })
  
  it('works with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([])
    expect(googleSearch(null, dbMock)).toEqual([])
  })
  
  it('does not return more than 3 results', () => {
    expect(googleSearch('.com',dbMock).length).toEqual(3)
  })
})
