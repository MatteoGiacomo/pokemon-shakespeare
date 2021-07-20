const STORAGE_NAME = 'pokes'

export const putFavouritesInStorage = (favourites: string[]): string[] | undefined => {
  const favouritesAsString = JSON.stringify(favourites)
  localStorage.setItem(STORAGE_NAME, favouritesAsString)

  return favourites
}

/**
 * get the favourite list from localStorage
 * @returns string[] with favourite list if present, empty array if not present
 */
export const getStoredFavourites = (): string[] => {
  const favourites = localStorage.getItem(STORAGE_NAME)

  if (favourites) {
    return JSON.parse(favourites)
  }

  return []
}

/**
 * add a name to the favourite list in localStorage
 * @param name
 * @returns string[] updated with the new name, "undefined" if name is already present in the list
 */
export const addFavourite = (name: string): string[] | undefined => {
  const favourites = getStoredFavourites()

  if (!favourites.includes(name)) {
    favourites.push(name)

    return putFavouritesInStorage(favourites)
  }

  return undefined
}

/**
 * remove a name from the favourite list in localStorage
 * @param name
 * @returns string[] list updated without the name, "undefined" if name was not present in the list
 */
export const removeFavourite = (name: string): string[] | undefined => {
  const favourites = getStoredFavourites()

  const favIndex = favourites.indexOf(name)

  if (favIndex > -1) {
    favourites.splice(favIndex, 1)

    return putFavouritesInStorage(favourites)
  }

  return undefined
}
