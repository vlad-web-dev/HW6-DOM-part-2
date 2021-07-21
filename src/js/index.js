const figure = document.getElementById('figure')
const typeFigure = document.getElementById('typeFigure')
const colorFigure = document.getElementById('colorFigure')
function changeFigureType() {
    figure.classList.remove(...figure.classList);
    figure.classList.add(typeFigure.value);
    colorFigure.value = '#000000';
    figure.style.background = colorFigure.value;
}

function changeColor() {
    figure.style.background = colorFigure.value;
}
typeFigure.addEventListener('change', changeFigureType)
colorFigure.addEventListener('input', changeColor)