import '@testing-library/jest-dom'
import { getByText, getByRole } from '@testing-library/dom'
import { PokemonCard } from '../PokemonCard'

describe('PokemonCard', () => {
  it('should render pokemon name', () => {
    const component = PokemonCard({
      name: 'test-name',
      description: 'test-description',
      isFavourite: false,
    })

    const name = getByText(component, 'test-name')
    expect(name).toBeTruthy()
  })

  it('should render pokemon description', () => {
    const component = PokemonCard({
      name: 'test-name',
      description: 'test-description',
      isFavourite: false,
    })

    const description = getByText(component, 'test-description')
    expect(description).toBeTruthy()
  })

  it('should render favourite button', () => {
    const component = PokemonCard({
      name: 'test-name',
      description: 'test-description',
      isFavourite: false,
    })

    const button = getByRole(component, 'button')
    expect(button).toBeTruthy()
  })

  it('should render add to favourite button', () => {
    const component = PokemonCard({
      name: 'test-name',
      description: 'test-description',
      isFavourite: false,
    })

    const button = getByRole(component, 'button')
    expect(button).toHaveTextContent('add to favourite')
  })

  it('should render remove from favourite button', () => {
    const component = PokemonCard({
      name: 'test-name',
      description: 'test-description',
      isFavourite: true,
    })

    const button = getByRole(component, 'button')

    expect(button).toHaveTextContent('remove from favourite')
  })
})
