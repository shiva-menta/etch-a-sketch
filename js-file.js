
const drawingContainer = document.querySelector('.grid-container');
let defaultSize = 250;

function createGrid(size=50) {
    drawingContainer.setAttribute('style', 'grid-template-columns: ' + 
        '1fr '.repeat(size));
    
    for (let row = 0; row < size; row++) {
        for (let column = 0; column < size; column++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-item');
            drawingContainer.appendChild(cell);
            cell.setAttribute('style', scaledDivSize(size));
        }
    }

    const drawingDivs = document.querySelectorAll('.grid-item');
    drawingDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mouseover', () => {
            squareDiv.setAttribute('style', 'background-color: black');
        })
    });
}

function scaledDivSize(size){
    let pixelFloat = defaultSize / size;
    return 'height: ' + pixelFloat + 'px; width: ' + pixelFloat + 'px'
}

createGrid(50);

var slider = document.getElementById("sizeSliderRange");
var sizeOutput = document.getElementById("size-output");
sizeOutput.innerHTML = slider.value + ' x ' + slider.value;

slider.oninput = function() {
    sizeOutput.innerHTML = slider.value + ' x ' + slider.value;
    drawingContainer.innerHTML = '';
    createGrid(slider.value);
}
