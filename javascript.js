window.onload = () => createDivs(16);

const board = document.querySelector('.board');
const slider = document.querySelector('#slider');
const sliderOutput = document.querySelector('#gridSizeOutput');
const body = document.querySelector('body');
const clearButton = document.querySelector('#clearGrid');
const rgbButton = document.querySelector('#rgbButton');
const shadingButton = document.querySelector('#shadingButton');
const eraseButton = document.querySelector('#eraseButton');
const colorButton = document.querySelector('#colorChange');

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

//below function shoud be split into smaller ones. I know...

function changeColor(e) {
    if (mouseDown === true) {
        if (rgbButton.checked) {
            e.target.style.cssText = `background-color: rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()});`;
        } else if (shadingButton.checked) {
            let currentOpacity = parseFloat(getComputedStyle(e.target).opacity);
            let currentBackground = getComputedStyle(e.target).backgroundColor;
            if (currentOpacity > 0 && currentOpacity != 1) {
                e.target.style.cssText = `background-color: #000000; opacity: ${currentOpacity + 0.1}`
            } else if (currentOpacity == 1 && currentBackground == 'rgb(0, 0, 0)') {
                return
            } else {
                e.target.style.cssText = 'background-color: #000000; opacity: 0.1;';
            };
        } else if (eraseButton.checked) {
            e.target.style.cssText = 'background-color: ;'
        } else {
            e.target.style.cssText = `background-color: ${colorButton.value};`;
    }};
};

function updateSliderText() {
    let size = slider.value;
    sliderOutput.textContent = `${size} x ${size}`;
};

function updateGrid() {
    let size = slider.value;
    sliderOutput.textContent = `${size} x ${size}`;
    clearBoard();
    createDivs(size);
};

function randomRGB() {
    return Math.floor(Math.random() * 256);
};

//DOM manipulation (using different methods to learn more :))

slider.addEventListener('change', updateGrid);
slider.addEventListener('mousemove', updateSliderText);

let mouseDown = false;

body.addEventListener('mousedown', () => {
    mouseDown = true;
});
body.addEventListener('mouseup', () => {
    mouseDown = false;
});

clearButton.onclick = () => {
    clearBoard();
    createDivs(slider.value);
};

shadingButton.onchange = () => {
    eraseButton.checked = false;
    rgbButton.checked = false;
};

rgbButton.onchange = () => {
    shadingButton.checked = false;
    eraseButton.checked = false;
};

eraseButton.onchange = () => {
    shadingButton.checked = false;
    rgbButton.checked = false;
};