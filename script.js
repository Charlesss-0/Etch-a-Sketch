// Grid area
const gridContainer = document.querySelector('#grid-container')
const rangeInputValue = document.querySelector('#range-input')
const rangeValueNum = document.querySelector('#range-value')
const applyBtnEl = document.querySelector('#apply-btn')

rangeInputValue.addEventListener('input', () => {
    const value = rangeInputValue.value
    rangeValueNum.textContent = value
})

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let squares = document.createElement('div')
        squares.classList.add('square')
        gridContainer.style.gridTemplateColumns = `repeat(16, 1fr)`
        gridContainer.style.gridTemplateRows = `repeat(16, 1fr)`
        gridContainer.appendChild(squares)
    }
}

function getInputValue(value) {
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

const sketchSectionEl = document.querySelector('#sketch-section')

function moveSketch() {
    sketchSectionEl.classList.toggle('sketch-margin')
}

paletteIconEl.addEventListener('click', () => {
    colorEl.classList.toggle('color')
    // moveSketch()
})

gridIconEl.addEventListener('click', () => {
    gridEl.classList.toggle('grid')
    // moveSketch()
})

fillIconEl.addEventListener('click', () => {
    fillEl.classList.toggle('fill-el')
    // moveSketch()
})

opacityIconEl.addEventListener('click', () => {
    opacityEl.classList.toggle('opacity')
    // moveSketch()
})

// Icon options
const pickIconEl = document.querySelector('#pick-icon')
const hoverIconEl = document.querySelector('#hover-icon')
const fillGridContainer = document.querySelector('#fillGridContainer-icon')
const squareEl = document.querySelectorAll('.square')
const colorInputEl = document.querySelector('#color-input')

const warmEl = document.querySelector('#warm-option')
const coolEl = document.querySelector('#cool-option')
const pastelEl = document.querySelector('#pastel-option')

function changeSquareColor(element) {
    element.style.backgroundColor = colorInputEl.value
} // Gets the square color from the input value

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
} // Changes the square color when hovered

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

// function getColorSchemeValue(element) {
//     element.style.backgroundColor = 
// }

warmEl.addEventListener('click', () => {
    const colorsArr = [
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

    const randomNum = Math.floor( Math.random() * colorsArr.length)
    const selectedColor = colorsArr[randomNum]

    addClickListeners(selectedColor)
})

// Opacity options
const opacityOneEl = document.querySelector('#opacity-50')
const opacityTwoEl = document.querySelector('#opacity-100')

function getOpacityValue(opacityVal) {
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

// grid16.addEventListener('click', () => {
//     const gridValue = 16
//     getInputValue(gridValue)
// })

// grid32.addEventListener('click', () => {
//     const gridValue = 32
//     getInputValue(gridValue)
// })

// grid64.addEventListener('click', () => {
//     const gridValue = 64
//     getInputValue(gridValue)
// })

// createGrid = gridNumber => {
//     if (gridNumber === undefined) {
//         gridNumber = 16
//     } else gridNumber = gridNumber

//     let gridSize = gridNumber * gridNumber
//     for (i = 0; i < gridSize; i++) {
//         let squares = document.createElement('div')
//         squares.classList.add('squares')
//         div.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`
//         div.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`
//         div.appendChild(squares)
//     }
// }

// function createGrid(gridNumber) {
//     if (gridNumber === undefined) {
//         gridNumber = 16
//     } else {
//         gridNumber = gridNumber
//     }

//     let gridSize = gridNumber * gridNumber
//     for (let i = 0; i < gridSize; i++) {
//         for (let j = 0; j < gridSize; j++) {
//             let squares = document.createElement('div')
//             squares.classList.add('squares')
//             div.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`
//             div.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`
//             gridContainer.appendChild(squares)
//         }
//     }
// }

// applyBtnEl.addEventListener('click', () => {
//     const valueEl = rangeInputValue.value
//     if (typeof valueEl === 'undefined') {
//         return 
//     } else {
//         createGrid(valueEl)
//     }
// })

// for (let i = 0; i < 16; i++) {
//     for (let j = 0; j < 16; j++) {
//         gridContainer.innerHTML += `
//             <div class="square"></div>
//         `
//     }
// } // creates a 16x16 grid using div