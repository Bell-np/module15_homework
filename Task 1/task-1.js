btn = document.querySelector('#btn-change');
svg = document.querySelector('#change_svg');

// Переменная для определения svg
let count = 2;

btn.addEventListener('click', () => {
    if (count === 1) {
        svg.src = '././svg/arrow-down-left-circle.svg';
        count++;
    }
    else if (count === 2) {
        svg.src = '././svg/arrow-down-left-circle-fill.svg';
        count--;
    }
});
