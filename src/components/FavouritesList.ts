import { SecondaryCta } from './SecondaryCta'

export const FavouritesList = (list: string[]): HTMLUListElement => {
  const ul = document.createElement('ul')
  ul.classList.add('list')

  list.forEach((itemContent: string) => {
    const listItem = document.createElement('li')

    const btn = SecondaryCta(itemContent)

    btn.name = itemContent
    listItem.appendChild(btn)

    listItem.classList.add('list__item')
    ul.appendChild(listItem)
  })

  return ul
}
