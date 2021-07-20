import { getPokemonData, getShakespaereTranslation } from '../api'
import pokemonSpeciesResponseMock from '../../mocks/pokemon-species-mock'
import shakespaereTranslationResponseMock from '../../mocks/shakespeare-translation-mock'

const getFetchMock = (responseFn: unknown) => {
  return jest.fn(() => Promise.resolve(responseFn))
}

describe('getPokemonData', () => {
  it('calls the correct endpoint', () => {
    const fetchMock = getFetchMock({
      ok: true,
      json: () => Promise.resolve(pokemonSpeciesResponseMock),
    })
    // @ts-expect-error controlled behavior
    global.fetch = fetchMock

    getPokemonData('test')

    expect(fetchMock).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon-species/test')

    jest.clearAllMocks()
  })

  describe('when error occours', () => {
    it('shows a warn log', async () => {
      const consoleWarn = jest.spyOn(console, 'warn').mockImplementation(() => 'test')
      const fetchMock = getFetchMock({
        ok: false,
        status: 404,
        json: () => Promise.reject('error from server'),
      })

      // @ts-expect-error controlled behavior
      global.fetch = fetchMock

      const data = await getPokemonData('test')

      expect(consoleWarn).toBeCalledWith('[API]: something went wrong getting pokemon data: ', 404)
      expect(data).toBeUndefined()

      jest.clearAllMocks()
    })
  })
})

describe('getShakespaereTranslation', () => {
  it('calls the correct endpoint', () => {
    const fetchMock = getFetchMock({
      ok: true,
      json: () => Promise.resolve(shakespaereTranslationResponseMock),
    })
    // @ts-expect-error controlled behavior
    global.fetch = fetchMock

    getShakespaereTranslation('test-texts')

    expect(fetchMock).toHaveBeenCalledWith('https://api.funtranslations.com/translate/shakespeare.json?text=test-texts')

    jest.clearAllMocks()
  })

  it('returns the expected field', async () => {
    const fetchMock = getFetchMock({
      ok: true,
      json: () => Promise.resolve(shakespaereTranslationResponseMock),
    })
    // @ts-expect-error controlled behavior
    global.fetch = fetchMock

    const response = await getShakespaereTranslation('test-texts')

    expect(response).toBe('translated-text-string')

    jest.clearAllMocks()
  })

  describe('when error occours', () => {
    it('shows a warn log', async () => {
      const consoleWarn = jest.spyOn(console, 'warn').mockImplementation(() => 'test')
      const fetchMock = getFetchMock({
        ok: false,
        status: 404,
        json: () => Promise.resolve(shakespaereTranslationResponseMock),
      })

      // @ts-expect-error controlled behavior
      global.fetch = fetchMock

      const data = await getShakespaereTranslation('test-texts')

      expect(consoleWarn).toBeCalledWith('[API]: something went wrong getting shakespaere transation: ', 404)
      expect(data).toBeUndefined()

      jest.clearAllMocks()
    })
  })
})
