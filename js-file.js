
const drawingContainer = document.querySelector('.grid-container');

function createGrid(size=16) {
    drawingContainer.setAttribute('style', 'grid-template-columns: ' + 
        '1fr '.repeat(size));
    
    for (let row = 0; row < size; row++) {
        for (let column = 0; column < size; column++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-item');
            drawingContainer.appendChild(cell);

        }
    }
}



createGrid(16);
const drawingDivs = document.querySelectorAll('.grid-item');
drawingDivs.forEach((squareDiv) => {
    squareDiv.addEventListener('mouseover', () => {
        squareDiv.setAttribute('style', 'background-color: black');
    })
});
