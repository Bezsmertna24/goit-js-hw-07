function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
const body = document.body;

changeColorBtn.addEventListener('click', handelChangeColor);

function handelChangeColor () {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
}