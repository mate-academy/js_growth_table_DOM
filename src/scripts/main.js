'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('tbody');
let rowLength = [...document.querySelectorAll('tr')].length;
let columnLength = [...document.querySelector('tr')
  .querySelectorAll('td')].length;

appendRow.addEventListener('click', () => {
  const copyRow = field.lastElementChild.cloneNode(true);

  field.append(copyRow);

  rowLength++;

  disabledButton(appendRow, removeRow, rowLength);
});

removeRow.addEventListener('click', () => {
  field.lastElementChild.remove();

  rowLength--;

  disabledButton(appendRow, removeRow, rowLength);
});

appendColumn.addEventListener('click', () => {
  const rows = [...document.querySelectorAll('tr')];

  rows.forEach((row) => {
    const td = document.createElement('td');

    row.append(td);
  });

  columnLength++;

  disabledButton(appendColumn, removeColumn, columnLength);
});

removeColumn.addEventListener('click', () => {
  const rows = [...document.querySelectorAll('tr')];

  rows.forEach((row) => {
    row.lastElementChild.remove();
  });

  columnLength--;

  disabledButton(appendColumn, removeColumn, columnLength);
});

function disabledButton(btnAdd, btnRemove, lengthElement) {
  lengthElement < 10 ? btnAdd.disabled = false : btnAdd.disabled = true;
  lengthElement > 2 ? btnRemove.disabled = false : btnRemove.disabled = true;
}
