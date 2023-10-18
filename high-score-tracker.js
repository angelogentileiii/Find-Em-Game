function passHighScores() {
    localStorage.setItem('easyHighScore', highScoreCounter[0])
    localStorage.setItem('mediumHighScore', highScoreCounter[1])
    localStorage.setItem('difficultHighScore', highScoreCounter[2])
    showHighScoresButton.remove()
    window.location.href = './high-score-page.html'
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.includes('high-score'))
    displayHighScores()
})

function nullBecomesZero(value) {
    if (value === 'null') {
        return 'N/A'
    } else {
        return value
    }
}

let importedScores = []
let scoresToShow

function displayHighScores () {

    importedScores[0] = localStorage.getItem('easyHighScore')
    importedScores[1] = localStorage.getItem('mediumHighScore')
    importedScores[2] = localStorage.getItem('difficultHighScore')
    console.log(importedScores)
    scoresToShow = importedScores.map(nullBecomesZero)

    const easyScoreElement = document.getElementById('easy-high-score')
    const mediumScoreElement = document.getElementById('medium-high-score')
    const difficultScoreElement = document.getElementById('difficult-high-score')
    
    easyScoreElement.textContent = scoresToShow[0]
    mediumScoreElement.textContent = scoresToShow[1]
    difficultScoreElement.textContent = scoresToShow[2]

}

backButton = document.getElementById('go-back')

if (window.location.href.includes('high')) {
    backButton.addEventListener('click', () => {
        returnToMain()
    })
}

function returnToMain() {

    localStorage.setItem('easyHighScore', importedScores[0])
    localStorage.setItem('mediumHighScore', importedScores[1])
    localStorage.setItem('difficultHighScore', importedScores[2])
    window.location.href = './index.html'

}