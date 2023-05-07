btn = document.querySelector('#check-width_and_height');

btn.addEventListener('click', () => {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    alert(`Ширина экоана: ${width}\nВысота экрана: ${height}`);
});