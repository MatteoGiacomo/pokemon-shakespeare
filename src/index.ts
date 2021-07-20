import { CardChildrenNames, Errors } from './types'
import { PokemonCard } from './components/PokemonCard'
import { ErrorMessage } from './components/ErrorMessage'
import { FavouritesList } from './components/FavouritesList'
import { getPokemonData, getShakespaereTranslation } from './services/api'
import { getEncodedText } from './services/utils'
import { addFavourite, getStoredFavourites, removeFavourite } from './services/storage'

let searchInput: HTMLInputElement
let searchButton: HTMLButtonElement
let contentSection: HTMLElement
let favouritesSection: HTMLElement

type AppState = {
  selectedName: string
  visitedPokemons: Record<string, string | undefined>
  favourites: string[]
  error: Errors | undefined
}

export const state: AppState = {
  selectedName: '',
  visitedPokemons: {},
  favourites: [],
  error: undefined,
}

/**
 * get favorites pokemon from local storage and update internal state
 */
const loadFavourites = () => {
  const storedFavourites = getStoredFavourites()
  state.favourites = storedFavourites
}

/**
 * get pokemon data, normalize description, get shakespaere translation and update internal state
 */
const loadSelectedPokemonData = async () => {
  const result = await getPokemonData(state.selectedName)

  if (!result) {
    state.error = Errors.PokemonAPI
    return
  }

  // retrieves the first english description available
  const flavor = result.flavor_text_entries.find((entry) => entry.language.name === 'en')

  if (!flavor) {
    state.error = Errors.PokemonContent
    return
  }

  const encodedText = getEncodedText(flavor.flavor_text)
  // get shakespaere translation
  const translation = await getShakespaereTranslation(encodedText)

  if (!translation) {
    state.error = Errors.ShakespaereAPI
    return
  }

  // update internal state
  state.visitedPokemons[state.selectedName] = translation
}

const renderFavouritesSection = () => {
  favouritesSection.textContent = ''

  const favouritesList = FavouritesList(state.favourites)
  favouritesSection.appendChild(favouritesList)
}

const renderContentSection = async () => {
  if (!state.visitedPokemons[state.selectedName]) {
    await loadSelectedPokemonData()
  }

  // reset content section
  contentSection.textContent = ''

  if (state.error) {
    const errorMessage = ErrorMessage(state.error)
    contentSection.appendChild(errorMessage)

    // auto remove error message after 3s
    setTimeout(() => {
      contentSection.removeChild(errorMessage)
    }, 3000)

    // reset error state
    state.error = undefined
    return
  }

  const pokemonCard = PokemonCard({
    name: state.selectedName,
    description: state.visitedPokemons[state.selectedName] || '',
    isFavourite: state.favourites.includes(state.selectedName),
  })

  contentSection.appendChild(pokemonCard)
}

const handleSearchButtonClick = async (event: Event) => {
  event.preventDefault()

  if (!searchInput.value) {
    return
  }

  state.selectedName = searchInput.value
  searchInput.value = ''

  await renderContentSection()
}

const handleContentClick = (event: Event) => {
  const clickedEl = event.target

  if (!(clickedEl instanceof HTMLButtonElement)) {
    return
  }

  // adding favourite
  if (clickedEl.name === CardChildrenNames.addFav) {
    const favouritesUpdated = addFavourite(state.selectedName)

    if (favouritesUpdated) {
      state.favourites = favouritesUpdated
      renderFavouritesSection()
      renderContentSection()
    }
  }

  // removing favourite
  if (clickedEl.name === CardChildrenNames.removeFav) {
    const favouritesUpdated = removeFavourite(state.selectedName)

    if (favouritesUpdated) {
      state.favourites = favouritesUpdated
      renderFavouritesSection()
      renderContentSection()
    }
  }
}

const handleFavouritesClick = async (event: Event) => {
  const clickedEl = event.target

  if (!(clickedEl instanceof HTMLButtonElement)) {
    return
  }

  if (!state.favourites.includes(clickedEl.name)) {
    return
  }
  // update selected name
  state.selectedName = clickedEl.name

  // update content section
  await renderContentSection()
}

const handleBeforeMount = () => {
  // eslint-disable-next-line
  searchInput = document.querySelector('.search__input')! as HTMLInputElement

  // eslint-disable-next-line
  searchButton = document.querySelector('.search__button')! as HTMLButtonElement
  searchButton.addEventListener('click', handleSearchButtonClick)

  // eslint-disable-next-line
  contentSection = document.querySelector('#content')! as HTMLButtonElement
  contentSection.addEventListener('click', handleContentClick)

  // eslint-disable-next-line
  favouritesSection = document.querySelector('#favourites')! as HTMLButtonElement
  favouritesSection.addEventListener('click', handleFavouritesClick)

  loadFavourites()
  renderFavouritesSection()
}

// LISTENER
document.addEventListener('DOMContentLoaded', handleBeforeMount, { once: true })
