function initialize(axis) {
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
}

let axis = 16;
initialize(axis);

let cells = document.querySelectorAll('.cell');

for (const cell of cells) {
    cell.addEventListener('mouseover', function() {
        cell.classList.add('active');
    })
}