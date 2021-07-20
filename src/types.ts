type NamedAPIResource = {
  name: string
  url: string
}

type APIResource = {
  url: string
}

export enum Errors {
  PokemonAPI = 'pokemon-not-found',
  PokemonContent = 'pokemon-english-description-not-found',
  ShakespaereAPI = 'shakespaere-trranslation-not-found',
}

export enum CardChildrenNames {
  clear = 'clear',
  addFav = 'addFav',
  removeFav = 'removeFav',
}

export type FlavourText = {
  flavor_text: string
  language: NamedAPIResource
  version: NamedAPIResource
}

export type PokemonSpeciesAPI = {
  id: number
  name: string
  order: number
  gender_rate: number
  capture_rate: number
  base_happiness: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  hatch_counter: number
  has_gender_differences: boolean
  forms_switchable: boolean
  growth_rate: NamedAPIResource
  pokedex_numbers: {
    entry_number: number
    pokedex: NamedAPIResource
  }[]
  egg_groups: NamedAPIResource[]
  color: NamedAPIResource
  shape: NamedAPIResource
  evolves_from_species: NamedAPIResource
  evolution_chain: APIResource
  habitat: NamedAPIResource | null
  generation: NamedAPIResource
  names: {
    name: string
    language: NamedAPIResource
  }[]
  flavor_text_entries: FlavourText[]
  form_descriptions: {
    description: string
    language: NamedAPIResource
  }[]
  genera: {
    genus: string
    language: NamedAPIResource
  }[]
  varieties: {
    is_default: boolean
    pokemon: NamedAPIResource
  }[]
  pal_park_encounters?: {
    area: NamedAPIResource
    base_score: number
    rate: number
  }[]
}

export type ShakespaereAPI = {
  success: {
    total: number
  }
  contents: {
    translated: string
    text: string
    translation: 'shakespeare'
  }
}
