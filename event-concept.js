const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


// Bubbling
// document.body.addEventListener('click', (event) => {
//   console.log('Event From', 'Body', event);
// })

// grandparent.addEventListener('click', (event) => {
//   console.log('Event From', 'Grand Parent', event);
// })

// parent.addEventListener('click', (event) => {
//   // event.stopPropagation();
//   console.log('Event From', 'Parent', event);
// })

// child.addEventListener('click', (event) => {
//   // event.stopPropagation();
//   console.log('Event From', 'Child', event);
// });


// capturing
document.body.addEventListener('click', (event) => {
  console.log('Event From', 'Body', event);
}, { capture: true });

grandparent.addEventListener('click', (event) => {
  console.log('Event From', 'Grand Parent', event);
}, { capture: true });

parent.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('Event From', 'Parent', event);
}, { capture: true });

child.addEventListener('click', (event) => {
  // event.stopPropagation();
  console.log('Event From', 'Child', event);
}, { capture: true });
