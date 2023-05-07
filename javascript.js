const board = document.querySelector('.board')

function createDivs(x) {
    for (i = 0; i < x; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        board.appendChild(row);
        for (y = 0; y < x; y++) {
            let cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            row.appendChild(cell);
        }
    };
};

createDivs(16);
