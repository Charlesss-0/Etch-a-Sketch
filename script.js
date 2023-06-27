// Grid area
const gridContainer = document.querySelector('#grid-container')
const rangeInputValue = document.querySelector('#range-input')
const rangeValueNum = document.querySelector('#range-value')
const applyBtnEl = document.querySelector('#apply-btn')

function getInputValueForGrid(value) {
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
}

rangeInputValue.addEventListener('input', () => {
    const value = rangeInputValue.value
    rangeValueNum.textContent = value
})

applyBtnEl.addEventListener('click', () => {
    const value = rangeInputValue.value
    getInputValueForGrid(value)
})

// Click icon actions
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

// Icon color options
const pickIconEl = document.querySelector('#pick-icon')
const hoverIconEl = document.querySelector('#hover-icon')
const fillGridContainer = document.querySelector('#fillGridContainer-icon')
const colorInputEl = document.querySelector('#color-input')

const warmEl = document.querySelector('.warm-option')
const coolEl = document.querySelector('.cool-option')
const pastelEl = document.querySelector('.pastel-option')

function getInputColor() {
    const value = colorInputEl.value
    return value
}

function getWarmColor() {
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

    const randomIndex = Math.floor( Math.random() * warmColorsArr.length)
    return warmColorsArr[randomIndex]
}

function getCoolColor() {
    const coolColorArr = [
        '#012a4a',
        '#013a63',
        '#01497c',
        '#014f86',
        '#2a6f97',
        '#2c7da0',
        '#468faf',
        '#61a5c2',
        '#89c2d9',
        '#a9d6e5'
    ]

    const randomIndex = Math.floor( Math.random() * coolColorArr.length )
    return coolColorArr[randomIndex]
}

function getPastelColor() {
    const pastelColorArr = [
        '#eddcd2',
        '#fff1e6',
        '#fde2e4',
        '#fad2e1',
        '#c5dedd',
        '#dbe7e4',
        '#f0efeb',
        '#d6e2e9',
        '#bcd4e6',
        '#99c1de'
    ]

    const randomIndex = Math.floor( Math.random() * pastelColorArr.length )
    return pastelColorArr[randomIndex]
}

function getSquareColor(colorElement) {
    let colorChoice
    switch (colorElement) {
        case warmEl:
            colorChoice = getWarmColor()
            break
        case coolEl:
            colorChoice = getCoolColor()
            break
        case pastelEl:
            colorChoice = getPastelColor()
            break
        default:
            colorChoice = getInputColor()
    }
    return colorChoice
}

function changeSquareColor(element) {
   element.style.backgroundColor = getSquareColor()
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