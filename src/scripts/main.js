'use strict';

const table = document.querySelector('tbody');

const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

addColumn.addEventListener('click', () => {
  removeColumn.disabled = false;

  const [...column] = document.querySelectorAll('tr');

  const itemsColumn = column[0].querySelectorAll('td');

  for (let i = 0; i < column.length; i++) {
    const [...newRow] = column[i].querySelectorAll('td');
    const copy = newRow[0].cloneNode(true);

    column[i].appendChild(copy);
  }

  if (itemsColumn.length === 9) {
    addColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  const [...column] = document.querySelectorAll('tr');
  const itemsColumn = column[0].querySelectorAll('td');

  addColumn.disabled = false;

  for (let i = 0; i < column.length; i++) {
    column[i].lastElementChild.remove();
  }

  if (itemsColumn.length === 3) {
    removeColumn.disabled = true;
  }
});

addRow.addEventListener('click', () => {
  removeRow.disabled = false;

  const [...column] = document.querySelectorAll('tr');

  const copy = column[0].cloneNode(true);

  table.appendChild(copy);

  if (column.length === 9) {
    addRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  addRow.disabled = false;

  const [...rows] = document.querySelectorAll('tr');

  table.lastElementChild.remove();

  if (rows.length === 3) {
    removeRow.disabled = true;
  }
});
