'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const field = document.querySelector('tbody');
let rowLength = [...document.querySelectorAll('tr')].length;
let columnLength = [...document.querySelector('tr')
  .querySelectorAll('td')].length;

appendRowButton.addEventListener('click', () => {
  const copyRow = field.lastElementChild.cloneNode(true);

  field.append(copyRow);

  rowLength++;

  disabledButton(appendRowButton, removeRowButton, rowLength);
});

removeRowButton.addEventListener('click', () => {
  field.lastElementChild.remove();

  rowLength--;

  disabledButton(appendRowButton, removeRowButton, rowLength);
});

appendColumnButton.addEventListener('click', () => {
  const rows = [...document.querySelectorAll('tr')];

  rows.forEach((row) => {
    const td = document.createElement('td');

    row.append(td);
  });

  columnLength++;

  disabledButton(appendColumnButton, removeColumnButton, columnLength);
});

removeColumnButton.addEventListener('click', () => {
  const rows = [...document.querySelectorAll('tr')];

  rows.forEach((row) => {
    row.lastElementChild.remove();
  });

  columnLength--;

  disabledButton(appendColumnButton, removeColumnButton, columnLength);
});

function disabledButton(btnAdd, btnRemove, lengthElement) {
  lengthElement < 10 ? btnAdd.disabled = false : btnAdd.disabled = true;
  lengthElement > 2 ? btnRemove.disabled = false : btnRemove.disabled = true;
}
