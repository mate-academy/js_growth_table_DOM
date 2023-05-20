'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('tbody');
let rows = document.querySelectorAll('tr');
const max = 10;
const min = 2;
let rowsNumber = rows.length;
let columnsNumber = rows[0].children.length;

addRow.addEventListener('click', () => {
  const row = rows[0].cloneNode(true);

  table.append(row);
  rows = document.querySelectorAll('tr');
  rowsNumber++;

  if (rowsNumber === max) {
    addRow.disabled = true;
  }

  if (rowsNumber > min) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  table.lastElementChild.remove();
  rows = document.querySelectorAll('tr');
  rowsNumber--;

  if (rowsNumber === min) {
    removeRow.disabled = true;
  }

  if (rowsNumber < max) {
    addRow.disabled = false;
  }
});

addColumn.addEventListener('click', () => {
  rows.forEach(el => {
    const cell = document.createElement('td');

    el.append(cell);
  });
  columnsNumber++;

  if (columnsNumber >= max) {
    addColumn.disabled = true;
  }

  if (columnsNumber < min) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  rows.forEach(el => el.lastElementChild.remove());
  columnsNumber--;

  if (columnsNumber <= min) {
    removeColumn.disabled = true;
  }

  if (columnsNumber < max) {
    addColumn.disabled = false;
  }
});
