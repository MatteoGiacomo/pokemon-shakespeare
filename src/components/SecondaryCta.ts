export const SecondaryCta = (text: string): HTMLButtonElement => {
  const secondaryCta = document.createElement('button')

  secondaryCta.classList.add('secondary-cta')

  secondaryCta.textContent = text

  return secondaryCta
}
