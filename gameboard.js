const currentScoreElement = document.getElementById('current-score-tracker');
const highScoreElement = document.getElementById('high-score-tracker');

let picturesArray = []

let targetPicture;
let body = document.querySelector('body')

const newGameButton = document.getElementById('new-game-button')

// body.appendChild(newGameButton)

// newGameButton.textContent = 'New Game'

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
let correctPictureSource


gameBoardArea.append(pictureTable)

targetRow = Math.floor(boardSize * Math.random())
targetColumn = Math.floor(boardSize * Math.random())

function fillGrid() {

    targetRow = Math.floor(boardSize * Math.random())
    targetColumn = Math.floor(boardSize * Math.random())

    pictureTable.innerHTML = ''
    correctPictureSource = document.getElementById('desired-character-image').src

    for (row = 0; row < boardSize; row++) {
    
        const newRow = document.createElement('tr')
        pictureTable.appendChild(newRow)
        for(column = 0; column < boardSize; column++) {
            const cell = document.createElement('td')
            
            let randomNumber = Math.floor(20 * Math.random())
    
            const newPicture = document.createElement('img')
            newPicture.className = 'grid-img'
            newPicture.id = `r${row}c${column}`
            newPicture.src = picturesArray[randomNumber].url
            
            if (correctPictureSource === newPicture.src) {
                randomNumber = Math.floor(19 * Math.random()) + randomNumber
                if (randomNumber > 19) {
                    randomNumber = randomNumber - 20
                }

                newPicture.src = picturesArray[randomNumber].url

            } 

            newRow.appendChild(cell)
            cell.append(newPicture)
    
        }
        
    }
    
    targetPicture = document.getElementById(`r${targetRow}c${targetColumn}`)
    targetPicture.src = correctPictureSource

    targetPicture.addEventListener('click', handleFound)
}

let scoreCounter = 1

function handleFound() {
    console.log('Found It!')
    currentScoreElement.textContent = `Current Score: ${Number(scoreCounter++)}`
    targetPicture.removeEventListener('click', handleFound);
    pictureTable.innerHTML = "";
    fillGrid();
}

if (Number(currentScoreElement.textContent > Number(highScoreElement.textContent))) {
    highScoreElement.textContent = currentScoreElement.textContent
}

newGameButton.addEventListener('click', () => {
    fillGrid()
})