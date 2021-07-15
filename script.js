/* function changeColor(getColor) {
    let bg = document.querySelector('.bg');
    let selectColor = getColor.value;
    let text = getColor.options[getColor.selectedIndex].text;
    bg.style.backgroundColor = selectColor;
    bg.innerHTML = text;

} */

document.querySelector('select').addEventListener('change', ({ target } = e) => {
    document.body.style.backgroundColor = target.value;
    document.querySelector("h1").textContent = target.value;
});