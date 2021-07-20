import '@testing-library/jest-dom'
import { getByText } from '@testing-library/dom'
import { ErrorMessage } from '../ErrorMessage'
import { Errors } from '../../types'

describe('ErrorMessage', () => {
  it('should render PokemonAPI error message', () => {
    const component = ErrorMessage(Errors.PokemonAPI)

    const message = getByText(component, "OPS! We didn't find any Pokemon with this name")
    expect(message).toBeTruthy()
  })

  it('should render PokemonContent error message', () => {
    const component = ErrorMessage(Errors.PokemonContent)

    const message = getByText(component, 'OPS! This Pokemon has no English translation')
    expect(message).toBeTruthy()
  })

  it('should render ShakespaereAPI error message', () => {
    const component = ErrorMessage(Errors.ShakespaereAPI)

    const message = getByText(component, 'OPS! Shakespaere is not able to translate this pokemon description')
    expect(message).toBeTruthy()
  })

  it('should render correctly', () => {
    const component = ErrorMessage(Errors.ShakespaereAPI)
    expect(component).toHaveClass('error_message')
  })
})
