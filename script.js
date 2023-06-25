const gridContainer = document.querySelector('#grid-container')

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        gridContainer.innerHTML += `
            <div class="square"></div>
        `
    }
} // creates a 16x16 grid using div

// Icon selectors
const paletteIconEl = document.querySelector('#palette-icon')
const gridIconEl = document.querySelector('#grid-icon')
const fillIconEl = document.querySelector('#fill-icon')
const opacityIconEl = document.querySelector('#opacity-icon')

function clickAction(iconEl) {
    if (iconEl.style.display === 'none') {
     iconEl.style.display = 'grid'
    } else {
     iconEl.style.display = 'none'
    }
 } // Toggles between display none and display grid to make the content appear

paletteIconEl.addEventListener('click', () => {
    const colorEl = document.querySelector('.color')

    clickAction(colorEl)
})

gridIconEl.addEventListener('click', () => {
    const gridEl = document.querySelector('.grid')

    clickAction(gridEl)
})

fillIconEl.addEventListener('click', () => {
    const fillEl = document.querySelector('.fill-el')

    clickAction(fillEl)
})

opacityIconEl.addEventListener('click', () => {
    const opacityEl = document.querySelector('.opacity')

    clickAction(opacityEl)
})

// Icon options
const pickIconEl = document.querySelector('#pick-icon')
const hoverIconEl = document.querySelector('#hover-icon')
const fillGridContainer = document.querySelector('#fillGridContainer-icon')
const squareEl = document.querySelectorAll('.square')
const colorInputEl = document.querySelector('#color-input')

function changeSquareColor(element) {
    element.style.backgroundColor = colorInputEl.value
}

function addClickListeners() {
    squareEl.forEach((element) => {
        element.addEventListener('click', () => {
            changeSquareColor(element)
        })
    })
} // Changes the square color when clicked

function addHoverListeners() {
    squareEl.forEach((element) => {
        element.addEventListener('mouseover', () => {
            changeSquareColor(element)
        })
    })
} // Changes the square color when hover

function changeAllSquareColors() {
    squareEl.forEach((element) => {
        changeSquareColor(element)
    })
} // Changes all the square colors when clicked

pickIconEl.addEventListener('click', () => {
    addClickListeners()
    pickIconEl.classList.toggle('border')
})

hoverIconEl.addEventListener('click', () => {
    addHoverListeners()
    hoverIconEl.classList.toggle('border')
})

fillGridContainer.addEventListener('click', () => {
    changeAllSquareColors()
})
