function initialize(axis) {
    let etchASketch = document.querySelector('#etchASketch');
    let cellDimension = 800 / axis;

    for (x = 1; x <= axis; x++) {
        let column = document.createElement('div');
        column.classList.add('col')
        column.style.width = cellDimension.toString() + 'px';
        etchASketch.appendChild(column);

        for (y = 1; y <= axis; y++) {
            let row = document.createElement('div');
            row.classList.add('cell');
            row.style.height = cellDimension.toString() + 'px';
            column.appendChild(row);
        }
    }
}

let axis = 16;
initialize(axis);