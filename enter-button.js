const enterButtonDiv = document.getElementById('enter-button')

function createEnterPage () {

    const enterButtonElement = document.createElement('button');
    enterButtonElement.id = 'enter-button-element';
    enterButtonElement.textContent = 'Enter';

    enterButtonDiv.appendChild(enterButtonElement);

    enterButtonElement.addEventListener('click', () => {
        location.href = "./index.html"
    })
    
}

createEnterPage();