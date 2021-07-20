import { Errors } from '../types'

export const ErrorMessage = (errorCode: Errors): HTMLSpanElement => {
  let message
  switch (errorCode) {
    case Errors.PokemonAPI:
      message = "OPS! We didn't find any Pokemon with this name"
      break
    case Errors.PokemonContent:
      message = 'OPS! This Pokemon has no English translation'
      break
    case Errors.ShakespaereAPI:
      message = 'OPS! Shakespaere is not able to translate this pokemon description'
      break
  }

  const span = document.createElement('span')
  span.textContent = message
  span.classList.add('error_message')

  return span
}
