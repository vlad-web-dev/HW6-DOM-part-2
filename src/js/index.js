window.addEventListener( 'load', function () {
    const figure = document.getElementById('figure')
    const typeFigure = document.getElementById('typeFigure')
    const colorFigure = document.getElementById('colorFigure')
    const applyBtn = document.getElementById('applyBtn')
    function applyChanges() {
        figure.classList.remove(...figure.classList);
        figure.classList.add(typeFigure.value);
        figure.style.background = colorFigure.value || '#000000';
    }
    if (figure && typeFigure && colorFigure && applyBtn) {
        applyBtn.addEventListener('click', applyChanges)
    }
});