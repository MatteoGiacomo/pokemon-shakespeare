import type { PokemonSpeciesAPI, ShakespaereAPI } from '../types'

export const POKEMON_API_BASE_PATH = 'https://pokeapi.co/api/v2/'
export const SHAKESPAERE_API_BASE_PATH = 'https://api.funtranslations.com/translate/shakespeare.json'

/**
 * given a pokemon nam, it returns pokemon species information
 * @param name
 * @returns
 */
export const getPokemonData = async (name: string): Promise<PokemonSpeciesAPI | undefined> => {
  try {
    const response = await fetch(`${POKEMON_API_BASE_PATH}pokemon-species/${name}`)

    if (!response.ok) {
      throw response.status
    }

    const data: PokemonSpeciesAPI = await response.json()

    return data
  } catch (e) {
    console.warn('[API]: something went wrong getting pokemon data: ', e)
    return undefined
  }
}

/**
 * translate a text in shakespaerean.
 * @param text an encoded string without breakline escapes
 * @returns
 */
export const getShakespaereTranslation = async (text: string): Promise<string | undefined> => {
  try {
    const response = await fetch(`${SHAKESPAERE_API_BASE_PATH}?text=${text}`)

    if (!response.ok) {
      throw response.status
    }

    const data: ShakespaereAPI = await response.json()

    return data.contents.translated
  } catch (e) {
    console.warn('[API]: something went wrong getting shakespaere transation: ', e)
    return undefined
  }
}
