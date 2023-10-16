let picturesArray = []

let targetPicture;
let body = document.querySelector('body')

const newGameButton = document.createElement('button')

body.appendChild(newGameButton)

newGameButton.textContent = 'New Game'



fetch('http://localhost:3000/results')
.then(results => results.json())
.then(character => character.forEach( character => {
    picturesArray.push(character)
}))

let boardSize = 5
let targetRow
let targetColumn

let pictureTable = document.createElement('table')
pictureTable.id = 'gameboard';



body.append(pictureTable)

targetRow = Math.floor(boardSize * Math.random())
targetColumn = Math.floor(boardSize * Math.random())

function fillGrid() {

    pictureTable.innerHTML = ''

    for (row = 0; row < boardSize; row++) {
    
        const newRow = document.createElement('tr')
        pictureTable.appendChild(newRow)
        for(column = 0; column < boardSize; column++) {
            const cell = document.createElement('td')
            
            const randomNumber = Math.floor(20 * Math.random())
    
            const newPicture = document.createElement('img')
            newPicture.className = 'grid-img'
            newPicture.style.width = '75px'
            newPicture.src = picturesArray[randomNumber].url
            newRow.appendChild(cell)
            cell.append(newPicture)
            newPicture.id = `r${row}c${column}`
    
        }
        
    }
    
    targetPicture = document.getElementById(`r${targetRow}c${targetColumn}`)
    console.log(targetPicture)

    targetPicture.addEventListener('click', handleFound)
}

function handleFound() {
    console.log('Found It!')
    targetPicture.removeEventListener('click', handleFound)
}

newGameButton.addEventListener('click', () => {
    fillGrid()
})