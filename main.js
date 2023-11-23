const changeThis = document.querySelector('.changeThis');
const form = document.getElementById('form');
const input = document.getElementById('input');

function changeColor(e) {
  e.preventDefault();
  const inputValue = input.value.toLowerCase();
  input.value = '';
  makePink(inputValue);
  makeBlack(inputValue);
  makeCyan(inputValue);
}

function makeBlack(color) {
  if (color === 'black' || color==='pop') {
    changeThis.classList.add('change2Black');
    changeThis.classList.remove('addPink');
    changeThis.classList.remove('changeCyan');
  }
}

function makePink(color) {
  if (color === 'pink') {
    changeThis.classList.add('addPink');
    changeThis.classList.remove('change2Black');
    changeThis.classList.remove('changeCyan');
  }
}

function makeCyan(color) {
  if (color === 'cyan') {
    changeThis.classList.add('changeCyan');
    changeThis.classList.remove('change2Black');
    changeThis.classList.remove('addPink');
  }
}

form.addEventListener('submit', changeColor);