import type { PokemonSpeciesAPI } from '../types'

const mock: PokemonSpeciesAPI = {
  base_happiness: 70,
  capture_rate: 45,
  color: { name: 'green', url: 'https://pokeapi.co/api/v2/pokemon-color/5/' },
  egg_groups: [{ name: 'bug', url: 'https://pokeapi.co/api/v2/egg-group/3/' }],
  evolution_chain: { url: 'https://pokeapi.co/api/v2/evolution-chain/213/' },
  evolves_from_species: { name: 'burmy', url: 'https://pokeapi.co/api/v2/pokemon-species/412/' },
  flavor_text_entries: [
    {
      flavor_text: 'When BURMY evolved, its cloak\nbecame a part of this Pokémon’s\nbody. The cloak is never shed.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'diamond', url: 'https://pokeapi.co/api/v2/version/12/' },
    },
    {
      flavor_text:
        'しんかした　ばしょによって　すがたが\nかわる。みぢかにある　ざいりょうが\nからだの　いちぶに　なるのだ。',
      language: { name: 'ja-Hrkt', url: 'https://pokeapi.co/api/v2/language/1/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        'Il suo aspetto dipende dal luogo in cui si evolve.\nTutto ciò che ha intorno va a costituire il suo corpo.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
  ],
  form_descriptions: [
    {
      description:
        "Forms have different stats and movepools.  During evolution, Burmy's current cloak becomes Wormadam's form, and can no longer be changed.",
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
    },
  ],
  forms_switchable: false,
  gender_rate: 8,
  genera: [
    { genus: 'みのむしポケモン', language: { name: 'ja-Hrkt', url: 'https://pokeapi.co/api/v2/language/1/' } },
    { genus: '도롱이벌레포켓몬', language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' } },
    { genus: '蓑衣蟲寶可夢', language: { name: 'zh-Hant', url: 'https://pokeapi.co/api/v2/language/4/' } },
    { genus: 'Pokémon Ver Caché', language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' } },
    { genus: 'Beutelwurm', language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' } },
    { genus: 'Pokémon Larva', language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' } },
    { genus: 'Pokémon Larva', language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' } },
    { genus: 'Bagworm Pokémon', language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' } },
    { genus: 'みのむしポケモン', language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' } },
    { genus: '蓑衣虫宝可梦', language: { name: 'zh-Hans', url: 'https://pokeapi.co/api/v2/language/12/' } },
  ],
  generation: { name: 'generation-iv', url: 'https://pokeapi.co/api/v2/generation/4/' },
  growth_rate: { name: 'medium', url: 'https://pokeapi.co/api/v2/growth-rate/2/' },
  habitat: null,
  has_gender_differences: false,
  hatch_counter: 15,
  id: 413,
  is_baby: false,
  is_legendary: false,
  is_mythical: false,
  name: 'wormadam',
  names: [
    { language: { name: 'ja-Hrkt', url: 'https://pokeapi.co/api/v2/language/1/' }, name: 'ミノマダム' },
    { language: { name: 'roomaji', url: 'https://pokeapi.co/api/v2/language/2/' }, name: 'Minomadam' },
    { language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' }, name: '도롱마담' },
    { language: { name: 'zh-Hant', url: 'https://pokeapi.co/api/v2/language/4/' }, name: '結草貴婦' },
    { language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' }, name: 'Cheniselle' },
    { language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' }, name: 'Burmadame' },
    { language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' }, name: 'Wormadam' },
    { language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' }, name: 'Wormadam' },
    { language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' }, name: 'Wormadam' },
    { language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' }, name: 'ミノマダム' },
    { language: { name: 'zh-Hans', url: 'https://pokeapi.co/api/v2/language/12/' }, name: '结草贵妇' },
  ],
  order: 441,
  pal_park_encounters: [
    { area: { name: 'forest', url: 'https://pokeapi.co/api/v2/pal-park-area/1/' }, base_score: 70, rate: 20 },
  ],
  pokedex_numbers: [
    { entry_number: 413, pokedex: { name: 'national', url: 'https://pokeapi.co/api/v2/pokedex/1/' } },
    { entry_number: 46, pokedex: { name: 'original-sinnoh', url: 'https://pokeapi.co/api/v2/pokedex/5/' } },
    { entry_number: 46, pokedex: { name: 'extended-sinnoh', url: 'https://pokeapi.co/api/v2/pokedex/6/' } },
    { entry_number: 45, pokedex: { name: 'kalos-central', url: 'https://pokeapi.co/api/v2/pokedex/12/' } },
  ],
  shape: { name: 'blob', url: 'https://pokeapi.co/api/v2/pokemon-shape/5/' },
  varieties: [
    { is_default: true, pokemon: { name: 'wormadam-plant', url: 'https://pokeapi.co/api/v2/pokemon/413/' } },
    { is_default: false, pokemon: { name: 'wormadam-sandy', url: 'https://pokeapi.co/api/v2/pokemon/10004/' } },
    { is_default: false, pokemon: { name: 'wormadam-trash', url: 'https://pokeapi.co/api/v2/pokemon/10005/' } },
  ],
}

export default mock
