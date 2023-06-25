const gridContainer = document.querySelector('#grid-container')

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridItem = document.createElement('div')
        gridItem.classList.add('square')
        gridContainer.appendChild(gridItem)
    }
}

const paletteIconEl = document.querySelector('#palette-icon')

paletteIconEl.addEventListener('click', () => {
    const hidden = document.querySelector('.hidden')

    hidden.classList.toggle('show')

    // if (hidden.style.display === 'none') {
    //     hidden.style.display = 'block'
    // } else {
    //     hidden.style.display = 'none'
    // }
})
