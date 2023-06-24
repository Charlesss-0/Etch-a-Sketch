const menuBurger = document.querySelector('#menu-burger')

menuBurger.addEventListener('click', () => {
    clickAction()
})

function clickAction() {
    const sideBarEl = document.querySelector('#side-bar-el')
    const sketchSection = document.querySelector('.sketch-section')
    const iconPositionEl = document.querySelectorAll('.position')

    sideBarEl.classList.toggle('sidebar-slide')
    sketchSection.classList.toggle('sketch-section-position')

    iconPositionEl.forEach(element => {
        element.classList.toggle('icon-position')
    })
}

const gridContainer = document.querySelector('#grid-container')

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridItem = document.createElement('div')
        gridItem.classList.add('square')
        gridContainer.appendChild(gridItem)
    }
}
