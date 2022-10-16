

// const divOne = document.getElementById('div-one');

// console.log(divOne);

// const assignRedColor = () => {
//   divOne.style.backgroundColor = 'red';
// }

// // addEventListener
// divOne.addEventListener('mouseover', assignRedColor, { once: true });

// const borderBlue = () => {
//   divOne.style.border = '5px solid blue';
// }

// divOne.addEventListener('mouseover', borderBlue);


// divOne.addEventListener('mouseleave', () => {
//   divOne.style.backgroundColor = 'transparent';
//   divOne.style.border = '1px solid';
// });


// // removeEventListener -- events can only be removed wth name function
// const removeOverEvent = () => {
//   console.log('removing over event');
//   divOne.removeEventListener('mouseover', assignRedColor);

// }

// const removeBorderEvent = () => {
//   console.log('removing over event - border color');
//   divOne.removeEventListener('mouseover', borderBlue);
// }


// const inpEle = document.getElementById('inp');

// console.log(inpEle.value);

// Event
// inpEle.addEventListener('keydown', (event) => {
// console.log('Key-Down', event);
// console.log('Key Pressed', inpEle.value);
// console.log('Value in Input', event.target.value);
// });

// inpEle.addEventListener('change', (event) => {
//   console.log('Change', event);
// });

// inpEle.addEventListener('blur', (event) => {
//   console.log('blur', event);
// });

// inpEle.addEventListener('focus', (event) => {
//   console.log('focus', event);
// });


// const divTwo = document.getElementById('div-two');

// divTwo.addEventListener('click', (e) => {
//   console.log('click', e)
// })

// divTwo.addEventListener('mouseleave', (e) => {
//   console.log('Leave', e)
// })


// const divScroll = document.getElementById('scroll-div');

// const scrollFunc = (e) => {
//   console.log('Scroll Event', e);
// }

// // addEventListener
// divScroll.addEventListener('scroll', scrollFunc);