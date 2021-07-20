import '@testing-library/jest-dom'
import { getAllByRole } from '@testing-library/dom'
import { FavouritesList } from '../FavouritesList'

describe('FavouritesList', () => {
  it('should render all items in the param list', () => {
    const component = FavouritesList(['favourite1', 'favourite2'])

    const buttonList = getAllByRole(component, 'button')
    expect(buttonList.length).toBe(2)
  })
})
