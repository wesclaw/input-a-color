const form = document.getElementById('form')
const input = document.getElementById('input')
const body = document.querySelector('body')

const colorMapping = {
  green: '#00FF00',
  darkgreen: '#006400',
  lightgreen: '#90EE90',
  black: '#000000',
  red: 'red',
  pink: 'pink',
  dark: 'rgba(61, 55, 55, 0.89)',
  purple: 'purple',
  cyan: 'cyan',
  blue: 'blue',
  yellow: 'yellow',
  orange: 'orange',
  brown: '#8B4513',
  gray: 'gray',
  white: 'white',
  gold: '#FFD700',
  silver: '#C0C0C0',
  maroon: '#800000',
  navy: '#000080',
  olive: '#808000',
  teal: '#008080',
  indigo: '#4B0082',
  lavender: '#E6E6FA',
  salmon: '#FA8072',
  slate: '#708090',
  turquoise: '#40E0D0',
};

function submitColor(e){
  e.preventDefault()
  const getUserInput = input.value.toLowerCase()

  for(const color in colorMapping){
    if(color===getUserInput){
      const changeThis = document.createElement('div')
      changeThis.classList.add('changeThis')
      changeThis.style.backgroundColor = colorMapping[color]
      body.append(changeThis)
      changeThis.style.animationName = 'change'
    }
  }
  input.value = ''
}

form.addEventListener('submit', submitColor)



///the page will refresh after page load and the form will display again so no need to append and create a div element


//////////for the portfolio questions. the page is refreshed so dont create a new div everytime

// const form = document.getElementById('form')
// const input = document.getElementById('input')
// const body = document.querySelector('body')


// const colorMapping = {
//   green: '#00FF00',
//   darkgreen: '#006400',
//   lightgreen: '#90EE90',
//   black: '#000000',
//   red: 'red',
//   pink: 'pink',
//   dark: 'rgba(61, 55, 55, 0.89)'
// };

// const changeThis = document.querySelector('.changeThis')

// function submitColor(e){
//   e.preventDefault()
//   const getUserInput = input.value.toLowerCase()
 
//   for(const color in colorMapping){
//     if(color===getUserInput){
//       changeThis.style.backgroundColor = colorMapping[color]
//       changeThis.style.animationName = 'change'
//     }
//   }
//   input.value = ''
// }

// form.addEventListener('submit', submitColor)