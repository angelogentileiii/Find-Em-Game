const gameBoardArea = document.getElementById('game-board-area')

fetch('https://nekos.best/api/v2/neko?amount=20')
  .then(response => response.json())
  .then(results => {
    const returnResults = results.results;
    console.log(returnResults)
});
