// Grid area
const gridContainer = document.querySelector('#grid-container')
const rangeInputValue = document.querySelector('#range-input')
const rangeValueNum = document.querySelector('#range-value')
const applyBtnEl = document.querySelector('#apply-btn')

rangeInputValue.addEventListener('input', () => {
    const value = rangeInputValue.value
    rangeValueNum.textContent = value
})

function getInputValue(value) {
    gridContainer.innerHTML = ''
    for (let i = 0; i < value; i++) {
        for (let j = 0; j < value; j++) {
            let squares = document.createElement('div')
            squares.classList.add('square')
            gridContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`
            gridContainer.style.gridTemplateRows = `repeat(${value}, 1fr)`
            gridContainer.appendChild(squares)
        }
    }
    
    addClickListeners()
    addHoverListeners()
    changeAllSquareColors()
}

applyBtnEl.addEventListener('click', () => {
    const value = rangeInputValue.value
    getInputValue(value)
})

// Icon selectors
const paletteIconEl = document.querySelector('#palette-icon')
const gridIconEl = document.querySelector('#grid-icon')
const fillIconEl = document.querySelector('#fill-icon')
const opacityIconEl = document.querySelector('#opacity-icon')

const colorEl = document.querySelector('.color')
const gridEl = document.querySelector('.grid')
const fillEl = document.querySelector('.fill-el')
const opacityEl = document.querySelector('.opacity')

paletteIconEl.addEventListener('click', () => {
    colorEl.classList.toggle('color')
})

gridIconEl.addEventListener('click', () => {
    gridEl.classList.toggle('grid')
})

fillIconEl.addEventListener('click', () => {
    fillEl.classList.toggle('fill-el')
})

opacityIconEl.addEventListener('click', () => {
    opacityEl.classList.toggle('opacity')
})

// Icon options
const pickIconEl = document.querySelector('#pick-icon')
const hoverIconEl = document.querySelector('#hover-icon')
const fillGridContainer = document.querySelector('#fillGridContainer-icon')
const colorInputEl = document.querySelector('#color-input')

const warmEl = document.querySelector('.warm-option')
// const coolEl = document.querySelector('.cool-option')
// const pastelEl = document.querySelector('.pastel-option')

const warmColorsArr = [
    '#797d62',
    '#9b9b7a',
    '#baa587',
    '#d9ae94',
    '#f1dca7',
    '#ffcb69',
    '#e8ac65',
    '#d08c60',
    '#b58463',
    '#997b66'
]

function getRandomColor(colorsArr) {
    const randomIndex = Math.floor( Math.random() * colorsArr.length )
    return colorsArr[randomIndex]
}

function changeSquareColor(element) {
   element.style.backgroundColor = getRandomColor(warmColorsArr)
}

function addClickListeners() {
    const squareEl = document.querySelectorAll('.square')
    squareEl.forEach((element) => {
        element.addEventListener('click', () => {
            changeSquareColor(element)
        })
    })
} // Changes the square color when clicked

function addHoverListeners() {
    const squareEl = document.querySelectorAll('.square')
    squareEl.forEach((element) => {
        element.addEventListener('mouseover', () => {
            changeSquareColor(element)
        })
    })
} // Changes the square color when hovered

function changeAllSquareColors() {
    const squareEl = document.querySelectorAll('.square')
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

warmEl.addEventListener('click', () => {
    changeSquareColor(warmEl)
})

colorInputEl.addEventListener('change', () => {
    changeSquareColor(colorInputEl)
})

// Opacity options
const opacityOneEl = document.querySelector('#opacity-50')
const opacityTwoEl = document.querySelector('#opacity-100')

function getOpacityValue(opacityVal) {
    const squareEl = document.querySelectorAll('.square')
    squareEl.forEach((element) => {
        element.style.opacity = opacityVal
    })
}

opacityOneEl.addEventListener('click', () => {
    getOpacityValue('50%')
})

opacityTwoEl.addEventListener('click', () => {
    getOpacityValue('100%')
})