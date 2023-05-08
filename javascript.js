window.onload = () => createDivs(16);

const board = document.querySelector('.board');
const slider = document.querySelector('#slider');
const sliderOutput = document.querySelector('#gridSizeOutput')

//functions

function createDivs(x) {
    for (i = 0; i < x; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        board.appendChild(row);
        for (y = 0; y < x; y++) {
            let cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            cell.addEventListener('mouseover', changeColor);
            row.appendChild(cell);
        }
    };
};

function clearBoard() {
    board.innerHTML = '';
};

function changeColor(e) {
    e.target.setAttribute('id', 'black');
};

function updateSlider() {
    let size = slider.value;
    sliderOutput.textContent = `${size} x ${size}`;
}

slider.addEventListener('change', updateSlider);
slider.addEventListener('mousemove', updateSlider);

console.log(slider.value)