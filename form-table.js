const formElement = document.createElement('form');

const fields = [
  { type: 'email', name: "email", id: 'email', label: "Email address"  },
  { type: 'text', name: 'firstName', id: 'first-name', label: "First Name" },
  { type: 'text', name: 'country', id: 'country', label: "Country" }
];

fields.map((obj) => {
  const field = document.createElement('div');
  field.classList.add('mb-3');

  const labelElement = document.createElement('label');
  labelElement.setAttribute('for', obj.id);
  labelElement.classList.add('form-lable');
  labelElement.innerText = obj.label

  field.appendChild(labelElement);

  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', obj.type);
  inputElement.setAttribute('id', obj.id);
  inputElement.setAttribute('name', obj.name);
  inputElement.classList.add('form-control');

  field.appendChild(inputElement);

  formElement.appendChild(field);
})

const btnElement = document.createElement('button');

btnElement.setAttribute('type', 'submit');
btnElement.setAttribute('class', 'btn btn-primary');
btnElement.innerText = "Submit";

formElement.appendChild(btnElement);

document.body.appendChild(formElement);

// Table

const tableElement = document.createElement('table');
tableElement.setAttribute('class', 'table');
tableElement.style.marginTop = '32px'

const createTableElement = (tagName, content) => {
  const tableElement = document.createElement(tagName);
  tableElement.innerHTML = content;
  return tableElement;
}

const thEmail = createTableElement('th', 'Email');
const thName = createTableElement('th', 'First Name');
const thCountry = createTableElement('th', 'Country');

const headTrElement = createTableElement('tr', '');
headTrElement.append(thEmail, thName, thCountry);

const tHead = createTableElement('thead', '');
tHead.append(headTrElement);

const tBody = createTableElement('tbody', '');

tableElement.append(tHead, tBody);

document.body.append(tableElement);

formElement.addEventListener('submit', (e) => {

  e.preventDefault();

  const inputs = e.target.elements;
  let data = {};
  for (i = 0; i < inputs.length; i++) {
    data[inputs[i].name] = inputs[i].value;
  }

  if (data.email && data.firstName && data.country) {
    const trElement = createTableElement('tr', '');
    const tdEmail = createTableElement('td', data['email']);
    const tdName = createTableElement('td', data['firstName']);
    const tdCountry = createTableElement('td', data['country']);

    trElement.append(tdEmail, tdName, tdCountry);

    tBody.appendChild(trElement);
  }
})
