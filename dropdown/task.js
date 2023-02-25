const dropdownValue = document.getElementsByClassName('dropdown__value')[0]
const dropdownList = document.getElementsByClassName('dropdown__list')[0]
const dropdownItems = Array.from(document.getElementsByClassName('dropdown__link'))

// Dropdown item activator
function dropdownItemClick (event) {
    dropdownList.classList.toggle('dropdown__list_active')
    dropdownValue.textContent = this.textContent
    event.preventDefault();
}

// Start handler dropdown value
dropdownValue.addEventListener('click', () => dropdownList.classList.toggle('dropdown__list_active'))

// Start handler dropdown items
dropdownItems.forEach((element) => {element.addEventListener('click', dropdownItemClick)})