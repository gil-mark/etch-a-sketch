function drawGrid(axis) {
    let etchASketch = document.querySelector('#etchASketch');
    let cellDimension = 800 / axis;

    for (x = 1; x <= axis; x++) {
        let column = document.createElement('div');
        column.classList.add('col')
        etchASketch.appendChild(column);

        for (y = 1; y <= axis; y++) {
            let row = document.createElement('div');
            
            row.classList.add('cell');
            row.setAttribute('id', x.toString() + ',' + y.toString());

            row.style.height = cellDimension.toString() + 'px';
            row.style.width = cellDimension.toString() + 'px';
            
            column.appendChild(row);
        }
    }

    let cells = document.querySelectorAll('.cell');

    for (const cell of cells) {
        cell.addEventListener('mouseover', function() {
            cell.classList.add('active');
        })
    }
}

function clearDrawing() {
    let cells = document.querySelectorAll('.cell');

    for (const cell of cells) {
        cell.classList.remove('active');
    }
}

function removeGrid() {
    let canvas = document.querySelector('etchASketch');

    while (etchASketch.firstChild) {
        etchASketch.removeChild(etchASketch.firstChild)
    }
}

let axis = 32;
drawGrid(axis);

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearDrawing)

let slider = document.getElementById('axisSlider');
let sliderValue = document.getElementById('sliderValue');

slider.oninput = function() {
    sliderValue.innerText = this.value;
    removeGrid();
    drawGrid(+this.value);
}