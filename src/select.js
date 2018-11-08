import Choices from 'choices.js'
import {format} from 'date-fns'

const planeSelect = document.querySelector('#plane-choices-single-remote-fetch')
const yachtSelect = document.querySelector('#yacht-choices-single-remote-fetch')
const planeSelectOptions = Array.from(planeSelect.querySelectorAll('option'))
const yachtSelectOptions = Array.from(yachtSelect.querySelectorAll('option'))

function updatePlace (select) {
  const {value} = select[select.selectedIndex]
  const place = select.closest('.vehicle').querySelector('.place')

  place.innerHTML = value
}

function setCurrentLocation (select, firstOption) {
 const today = format(new Date(), 'YYYY.MM.DD.')
  if (firstOption.text !== today) {
    const newOption = document.createElement('option')
    newOption.text = today
    newOption.value = firstOption.value
    newOption.selected = true

    select.prepend(newOption)
  }

  updatePlace(select)
}

setCurrentLocation(planeSelect, planeSelectOptions[0])
setCurrentLocation(yachtSelect, yachtSelectOptions[0])

new Choices('select', {
  shouldSort: false,
  searchEnabled: false
})

planeSelect.addEventListener('change', event => updatePlace(event.target))
yachtSelect.addEventListener('change', event => updatePlace(event.target))