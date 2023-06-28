// Grid area
const gridContainer = document.querySelector('#grid-container')
const rangeInputValue = document.querySelector('#range-input')
const rangeValueNum = document.querySelector('#range-value')
const applyBtnEl = document.querySelector('#apply-btn')

function defaultGridValue() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let squares = document.createElement('div')
            squares.classList.add('square')
            gridContainer.style.gridTemplateColumns = `repeat(16, 1fr)`
            gridContainer.style.gridTemplateRows = `repeat(16, 1fr)`
            gridContainer.appendChild(squares)
        }
    }
}
defaultGridValue()

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

function removeClassList() {
    warmEl.classList.remove('border')
    coolEl.classList.remove('border')
    pastelEl.classList.remove('border')
    pickIconEl.classList.remove('border')
    hoverIconEl.classList.remove('border')
}

rangeInputValue.addEventListener('input', () => {
    const value = rangeInputValue.value
    rangeValueNum.textContent = value
})

applyBtnEl.addEventListener('click', () => {
    const value = rangeInputValue.value
    getInputValueForGrid(value)
    removeClassList()
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
const fillGridIcon = document.querySelector('#fill-grid-icon')

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

pickIconEl.addEventListener('click', () => {
    const squareEl = document.querySelectorAll('.square')
    squareEl.forEach((element) => {
        element.addEventListener('click', () => {
            element.style.backgroundColor = getInputColor()
        })
    })
    pickIconEl.classList.add('border')
    hoverIconEl.classList.remove('border')
})

hoverIconEl.addEventListener('click', () => {
    const squareEl = document.querySelectorAll('.square')
    squareEl.forEach((element) => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = getInputColor()
        })
    })
    hoverIconEl.classList.add('border')
    pickIconEl.classList.remove('border')
})

fillGridIcon.addEventListener('click', () => {
    const squareEl = document.querySelectorAll('.square')
    squareEl.forEach((element) => {
        element.style.backgroundColor = getInputColor()
    })
})

warmEl.addEventListener('click', () => {
    const squareEl = document.querySelectorAll('.square')
    squareEl.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = getWarmColor()
        })
    })
    warmEl.classList.add('border')
    coolEl.classList.remove('border')
    pastelEl.classList.remove('border')
})

coolEl.addEventListener('click', () => {
    const squareEl = document.querySelectorAll('.square')
    squareEl.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = getCoolColor()
        })
    })
    coolEl.classList.add('border')
    warmEl.classList.remove('border')
    pastelEl.classList.remove('border')
})

pastelEl.addEventListener('click', () => {
    const squareEl = document.querySelectorAll('.square')
    squareEl.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = getPastelColor()
        })
    })
    pastelEl.classList.add('border')
    warmEl.classList.remove('border')
    coolEl.classList.remove('border')
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
    opacityOneEl.classList.add('border')
    opacityTwoEl.classList.remove('border')
})

opacityTwoEl.addEventListener('click', () => {
    getOpacityValue('100%')
    opacityTwoEl.classList.add('border')
    opacityOneEl.classList.remove('border')
})

const backArrowEl = document.querySelector('#back-arrow')
const forthArrowEl = document.querySelector('#forth-arrow')
const clearEl = document.querySelector('#clear')

const colorHistory = []
let currentState = 0

function saveColorState() {
    const squareEl = document.querySelectorAll('.square')
    const colors = Array.from(squareEl).map((element) => element.style.backgroundColor)
    colorHistory.push(colors)
    currentState = colorHistory.length -1  
}

function undoColorState() {
    if (currentState > 0) {
        currentState--
    }
}

function redoColorState() {
    if (currentState < colorHistory.length - 1) {
        currentState++
    }
}

clearEl.addEventListener('click', () => {
    const squareEl = document.querySelectorAll('.square')
    squareEl.forEach((element) => {
        element.style.backgroundColor = "#fff"
    })
})

backArrowEl.addEventListener('click', undoColorState)
forthArrowEl.addEventListener('click', redoColorState)