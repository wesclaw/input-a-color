const changeThis = document.querySelector('.changeThis');
const form = document.getElementById('form');
const input = document.getElementById('input');

function changeColor(e) {
  e.preventDefault();
  const inputValue = input.value.toLowerCase();
  input.value = '';
  setTimeout(()=>{
  makePink(inputValue);
  makeBlack(inputValue);
  makeCyan(inputValue);
  makeGreen(inputValue)
  },200)
} 

function makeBlack(color) {
  if (color === 'black' || color==='dark') {
    changeThis.classList.add('change2Black');
    changeThis.classList.remove('addPink');
    changeThis.classList.remove('changeCyan');
    changeThis.classList.remove('addGreen') 
  }
}

function makePink(color) {
  if (color === 'pink') {
    changeThis.classList.add('addPink');
    changeThis.classList.remove('change2Black');
    changeThis.classList.remove('changeCyan');
    changeThis.classList.remove('addGreen')
  }
}

function makeCyan(color) {
  if (color === 'cyan') {
    changeThis.classList.add('changeCyan');
    changeThis.classList.remove('change2Black');
    changeThis.classList.remove('addPink');
    changeThis.classList.remove('addGreen')
  }
}

function makeGreen(color){
  if(color==='green'){
    changeThis.classList.remove('changeCyan');
    changeThis.classList.remove('change2Black');
    changeThis.classList.remove('addPink');
    changeThis.classList.add('addGreen')
  }
}

form.addEventListener('submit', changeColor);
