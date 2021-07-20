import { AddFavouriteButton, RemoveFavouriteButton } from './FavouriteBtn'

type PokemonCardProps = {
  name: string
  description: string
  isFavourite: boolean
}

/**
 * create a card with a title, description and a CTA to manage favourites list
 * @param props
 * @returns
 */
export const PokemonCard = (props: PokemonCardProps): HTMLElement => {
  const container = document.createElement('article')
  const title = document.createElement('h2')
  const paragraph = document.createElement('p')

  // add styles
  container.classList.add('card')
  title.classList.add('card__title')
  paragraph.classList.add('card__paragraph')

  title.textContent = props.name
  paragraph.textContent = props.description

  const cta = props.isFavourite ? RemoveFavouriteButton() : AddFavouriteButton()

  container.append(title, paragraph, cta)

  return container
}
