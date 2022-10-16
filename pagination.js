const h1Element = document.createElement('h1');

h1Element.id = 'title';

h1Element.innerText = "Pagination";

const pElement = document.createElement('p');

pElement.id = 'description';

pElement.innerText = "Paginating the some amount of data in a proper format";


const containerDiv = document.createElement('div');

const innerDiv = document.createElement('div');
innerDiv.className = 'table-responsive';
containerDiv.appendChild(innerDiv);



document.body.append(h1Element, pElement, containerDiv);