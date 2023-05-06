const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  spanColor: document.querySelector(".color"),
  body: document.querySelector("body"),
};

refs.changeColorBtn.addEventListener('click', changeColorBtn);

function changeColorBtn() {
  const currentColor = getRandomHexColor();
  refs.spanColor.textContent = currentColor;
  refs.body.style.backgroundColor = currentColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

