const tabList = Array.from(document.getElementsByClassName('tab'))
const tabContentList = Array.from(document.getElementsByClassName('tab__content'))

// Tab switcher
function tabSwitcher (event) {
    tabList.forEach((element) => element.classList.remove('tab_active'))
    tabContentList.forEach((element) => element.classList.remove('tab__content_active'))
    tabList[tabList.indexOf(event.target)].classList.add('tab_active')
    tabContentList[tabList.indexOf(event.target)].classList.add('tab__content_active')
}


// Start handler tab
tabList.forEach((element) => {element.addEventListener('click', tabSwitcher)})
