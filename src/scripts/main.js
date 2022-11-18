'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');

const newCell = document.createElement('td');

let columnNumber = table.rows[0].cells.length;
let rowsNumber = table.rows.length;

appendRow.addEventListener('click', () => {
  rowsNumber++;

  tbody.append(tbody.children[0].cloneNode(true));

  if (rowsNumber >= 10) {
    appendRow.disabled = true;
  }

  removeRow.disabled = false;
});

removeRow.addEventListener('click', (ev) => {
  rowsNumber--;
  tbody.children[rowsNumber].remove();

  if (rowsNumber <= 2) {
    removeRow.disabled = true;
  }

  appendRow.disabled = false;
});

appendColumn.addEventListener('click', (ev) => {
  columnNumber++;

  if (columnNumber >= 10) {
    appendColumn.disabled = true;
  }

  [...table.rows].forEach((el) => el.append(newCell.cloneNode()));

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', (ev) => {
  columnNumber--;

  if (columnNumber <= 2) {
    removeColumn.disabled = true;
  }

  [...table.rows].forEach((el) => el.children[columnNumber].remove());

  appendColumn.disabled = false;
});
