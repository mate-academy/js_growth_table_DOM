'use strict';

// write code here
const field = document.querySelector('tbody');
const rCol = document.querySelector('.remove-column');
const aCol = document.querySelector('.append-column');
const rRow = document.querySelector('.remove-row');
const aRow = document.querySelector('.append-row');

aRow.addEventListener('click', () => {
  field.appendChild(field.firstElementChild.cloneNode(true));
  rRow.disabled = false;

  if (field.children.length >= 10) {
    aRow.disabled = true;
  }
});

rRow.addEventListener('click', () => {
  field.removeChild(field.lastElementChild);
  aRow.disabled = false;

  if (field.children.length <= 2) {
    rRow.disabled = true;
  }
});

aCol.addEventListener('click', () => {
  rCol.disabled = false;

  for (const i of field.children) {
    const cell = document.createElement('td');

    i.appendChild(cell);
  }

  if (field.firstElementChild.childElementCount >= 10) {
    aCol.disabled = true;
  }
});

rCol.addEventListener('click', () => {
  aCol.disabled = false;

  for (const i of field.children) {
    i.removeChild(i.lastElementChild);
  }

  if (field.firstElementChild.childElementCount <= 2) {
    rCol.disabled = true;
  }
});
