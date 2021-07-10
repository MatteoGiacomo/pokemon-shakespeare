let searchInput: HTMLInputElement
let searchButton: HTMLButtonElement

// HANDLERS
const handleInputChange = () => {
  console.log('input value: ', searchInput.value)
}

const handleButtonCilck = (event: Event) => {
  event.preventDefault()
  console.log('button clicked')
}

const handleBeforeMount = () => {
  // eslint-disable-next-line
  searchInput = document.getElementById('input-search')! as HTMLInputElement
  // eslint-disable-next-line
  searchButton = document.getElementById('button-search')! as HTMLButtonElement

  searchInput.addEventListener('input', handleInputChange)
  searchButton.addEventListener('click', handleButtonCilck)
}

// LISTENER
document.addEventListener('DOMContentLoaded', handleBeforeMount)
