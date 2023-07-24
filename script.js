function drawGrid(axis = 32) {
    let etchASketch = document.querySelector('#etchASketch');
    let cellDimension = 800 / axis;

    for (x = 1; x <= axis; x++) {
        let column = document.createElement('div');
        column.classList.add('col')
        etchASketch.appendChild(column);

        for (y = 1; y <= axis; y++) {
            let cell = document.createElement('div');
            
            cell.classList.add('cell');
            cell.setAttribute('id', x.toString() + ',' + y.toString());
            cell.setAttribute('tintIndex', '1');

            cell.style.height = cellDimension.toString() + 'px';
            cell.style.width = cellDimension.toString() + 'px';
            cell.style.background = 'rgb(255, 255, 255)'
            
            column.appendChild(cell);
        }
    }
}

function clearDrawing() {
    let cells = document.querySelectorAll('.cell');

    for (const cell of cells) {
        cell.style.background = 'rgb(255, 255, 255)';
    }
}

function removeGrid() {
    let canvas = document.querySelector('etchASketch');

    while (etchASketch.firstChild) {
        etchASketch.removeChild(etchASketch.firstChild)
    }
}

function draw() {
    let cells = document.querySelectorAll('.cell');

    for (const cell of cells) {
        cell.addEventListener('mouseover', function(e) {
            if (e.buttons === 1) {
                switch (drawingVariant) {
                    case 'random':
                        let r = Math.floor(Math.random() * 255).toString();
                        let g = Math.floor(Math.random() * 255).toString();
                        let b = Math.floor(Math.random() * 255).toString();

                        cell.style.background = `rgb(${r}, ${g}, ${b})`;
                        break;
                    case 'tint':
                        let currentColor = cell.style.background;
                        let tintIndex = +cell.attributes.tintIndex.value;

                        let splitRGB = currentColor.substr(4).split(")")[0].split(', ');
                        let newR = (10 - tintIndex) / 10 * +splitRGB[0];
                        let newG = (10 - tintIndex) / 10 * +splitRGB[1];
                        let newB = (10 - tintIndex) / 10 * +splitRGB[2];
                        
                        let newRGB = `rgb(${(newR > 0) ? newR.toString() : '0'}, ${(newG > 0) ? newG.toString() : '0'}, ${(newB > 0 ) ? newB.toString() : '0'})`
                        cell.style.background = newRGB;
                        cell.attributes.tintIndex.value = ++tintIndex

                        break;
                    default:
                        cell.style.background = 'rgb(0, 0, 0)';
                        break;
                }
                
                
                
            }
        })
    }
}



drawGrid()
draw()

let slider = document.getElementById('axisSlider');
let sliderValue = document.getElementById('sliderValue');

slider.oninput = function() {
    sliderValue.innerText = this.value;
    removeGrid();
    drawGrid(+this.value);
    draw();
}

let drawingVariant = 'regular'
let drawingType = document.querySelector('#drawingType');
drawingType.addEventListener('change', (e) => {
    drawingVariant = e.target.value;
})

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearDrawing)

