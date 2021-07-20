import * as storageServices from '../storage'

describe('putFavouritesInStorage', () => {
  it('should add param value in localStorage', () => {
    const setItemSpy = jest.spyOn(window.localStorage.__proto__, 'setItem')

    storageServices.putFavouritesInStorage(['test1', 'test2'])

    expect(setItemSpy).toHaveBeenCalledWith('pokes', '["test1","test2"]')

    jest.clearAllMocks()
  })
})

describe('getStoredFavourites', () => {
  it('should get data from localStorage', () => {
    const getItemSpy = jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue('["test1", "test2"]')

    storageServices.getStoredFavourites()

    expect(getItemSpy).toHaveBeenCalledWith('pokes')

    jest.clearAllMocks()
  })

  it('should return an empty array if no storage is found', () => {
    jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue(undefined)

    const result = storageServices.getStoredFavourites()

    expect(result).toEqual([])

    jest.clearAllMocks()
  })
})

describe('addFavourite', () => {
  it('should add an element in storage and return the updated storage value', () => {
    jest.spyOn(storageServices, 'getStoredFavourites').mockReturnValue(['test1'])
    jest.spyOn(storageServices, 'putFavouritesInStorage').mockImplementation((value) => value)

    const result = storageServices.addFavourite('test2')

    expect(result).toEqual(['test1', 'test2'])

    jest.clearAllMocks()
  })

  it('should return undefined if the element is already present in the storage', () => {
    jest.spyOn(storageServices, 'getStoredFavourites').mockReturnValue(['test1'])

    const result = storageServices.addFavourite('test1')

    expect(result).toBeUndefined()

    jest.clearAllMocks()
  })
})

describe('removeFavourite', () => {
  it('should remove an element from the storage and return the updated storage value', () => {
    jest.spyOn(storageServices, 'getStoredFavourites').mockReturnValue(['test1', 'test2'])
    jest.spyOn(storageServices, 'putFavouritesInStorage').mockImplementation((value) => value)

    const result = storageServices.removeFavourite('test2')

    expect(result).toEqual(['test1'])

    jest.clearAllMocks()
  })

  it('should return undefined if the element is not present in the storage', () => {
    jest.spyOn(storageServices, 'getStoredFavourites').mockReturnValue(['test1'])

    const result = storageServices.removeFavourite('test2')

    expect(result).toBeUndefined()

    jest.clearAllMocks()
  })
})
