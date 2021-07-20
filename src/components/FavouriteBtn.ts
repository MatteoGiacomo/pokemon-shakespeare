import { CardChildrenNames } from '../types'
import { SecondaryCta } from './SecondaryCta'

export const AddFavouriteButton = (): HTMLButtonElement => {
  const addFavBtn = SecondaryCta('add to favourites')

  addFavBtn.name = CardChildrenNames.addFav

  return addFavBtn
}

export const RemoveFavouriteButton = (): HTMLButtonElement => {
  const removeFavBtn = SecondaryCta('remove from favourites')

  removeFavBtn.name = CardChildrenNames.removeFav

  return removeFavBtn
}
