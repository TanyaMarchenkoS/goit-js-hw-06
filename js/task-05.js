const textInputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

textInputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  outputRef.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    outputRef.textContent = 'Anonymous'
}
}
