
const drawingContainer = document.querySelector('.grid-container');
let defaultSize = 250;
let mouseDownStatus = false;
let isMarker = true; // true if marker mode, false if eraser mode
let isRainbow = false;

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
            if (mouseDownStatus && isMarker) {
                squareDiv.setAttribute('style', 'background-color: ' + getCurrentColor());
            } else if (mouseDownStatus && !isMarker) {
                squareDiv.setAttribute('style', 'background-color: white');
            }
        });
        squareDiv.addEventListener('mousedown', () => {
            mouseDownStatus = true;
        });
        squareDiv.addEventListener('mouseup', () => {
            mouseDownStatus = false;
        });
    });
}

function getCurrentColor() {
    if (isRainbow) {
        return "#" + ((1<<24)*Math.random() | 0).toString(16);
    } else {
        const colorPicker = document.getElementById('colorpicker');
        return colorPicker.value;
    }
}

function clearGrid() {
    drawingContainer.innerHTML = '';
    createGrid(slider.value);
}

function scaledDivSize(size){
    let pixelFloat = defaultSize / size;
    return 'height: ' + pixelFloat + 'px; width: ' + pixelFloat + 'px'
}

createGrid(50);

var slider = document.getElementById("sizeSliderRange");
var sizeOutput = document.getElementById("size-output");
sizeOutput.innerHTML = slider.value + ' x ' + slider.value;

const colorBtn = document.getElementById('single-color');
colorBtn.addEventListener('click', () => {
    isMarker = true;
    isRainbow = false;
});

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => clearGrid());

const eraserBtn = document.getElementById('eraser');
eraserBtn.addEventListener('click', () => (isMarker = false));

const rainbowBtn = document.getElementById('rainbow-color');
rainbowBtn.addEventListener('click', () => {
    isRainbow = true;
    isMarker = true;
});

slider.oninput = function() {
    sizeOutput.innerHTML = slider.value + ' x ' + slider.value;
    drawingContainer.innerHTML = '';
    createGrid(slider.value);
}

