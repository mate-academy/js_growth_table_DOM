'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');
let rowNumber = table.rows.length;
let columnNumber = table.rows[0].cells.length;

addRow.addEventListener('click', e => {
  const row = document.createElement('tr');

  for (let i = 0; i < columnNumber; i++) {
    const cell = document.createElement('td');

    row.append(cell);
  }

  table.append(row);
  rowNumber++;

  if (rowNumber > 9) {
    addRow.disabled = true;
  }

  if (rowNumber > 2) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', e => {
  rowNumber--;
  table.rows[rowNumber].remove();

  if (rowNumber < 3) {
    removeRow.disabled = true;
  }

  if (rowNumber < 10) {
    addRow.disabled = false;
  }
});

addColumn.addEventListener('click', e => {
  for (let i = 0; i < rowNumber; i++) {
    const cell = document.createElement('td');

    table.rows[i].append(cell);
  }

  columnNumber++;

  if (columnNumber > 9) {
    addColumn.disabled = true;
  }

  if (rowNumber > 2) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', e => {
  columnNumber--;

  for (let i = 0; i < rowNumber; i++) {
    table.rows[i].cells[columnNumber].remove();
  }

  if (columnNumber < 3) {
    removeColumn.disabled = true;
  }

  if (rowNumber < 10) {
    addColumn.disabled = false;
  }
});
