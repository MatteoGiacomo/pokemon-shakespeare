import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { getByRole, queryByText, waitFor } from '@testing-library/dom'
import { getAppDom } from '../../jest.utils'
import pokemonSpeciesResponseMock from '../mocks/pokemon-species-mock'
import shakespaereTranslationResponseMock from '../mocks/shakespeare-translation-mock'

let APP_DOM: HTMLElement

beforeEach(() => {
  APP_DOM = getAppDom().body
})

describe('render', () => {
  it('should render title', () => {
    const title = APP_DOM.querySelector('h1')
    expect(title).not.toBeNull()
  })

  it('should render search input', () => {
    const searchInput = getByRole(APP_DOM, 'textbox')
    expect(searchInput).toBeInTheDocument()
  })

  it('should render search button', () => {
    const searchButton = getByRole(APP_DOM, 'button')
    expect(searchButton).toBeInTheDocument()
  })
})

// @TODO find a solution to load the JS script
// js script is not loaded so userEvevnt click method doesn't perfom any action
describe.skip('search', () => {
  it('should render information translated', async () => {
    const fetchMock = jest
      .fn()
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(pokemonSpeciesResponseMock),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(shakespaereTranslationResponseMock),
      })

    global.fetch = fetchMock

    const searchInput = getByRole(APP_DOM, 'textbox')
    userEvent.type(searchInput, 'test-pokemon')

    const serchButton = getByRole(APP_DOM, 'button')
    userEvent.click(serchButton)

    const { contents } = shakespaereTranslationResponseMock

    await waitFor(() => {
      const description = queryByText(APP_DOM, contents.translated)
      expect(description).toBeInTheDocument()
    })

    jest.clearAllMocks()
  })
})
