'use strict';

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');
const firstRow = table.rows[0];
let rowsCount = Array.from(rows).length;

addRowButton.addEventListener('click', () => {
  const newRow = document.createElement('tr');

  for (let i = 0; i < firstRow.cells.length; i++) {
    const td = document.createElement('td');

    newRow.appendChild(td);
  }

  table.appendChild(newRow);
  rowsCount++;

  addRowButton.disabled = rowsCount >= 10;
  removeRowButton.disabled = rowsCount <= 2;
});

removeRowButton.addEventListener('click', () => {
  if (rowsCount >= 2) {
    table.deleteRow(rowsCount - 1);
    rowsCount--;
  }

  removeRowButton.disabled = rowsCount <= 2;
  addRowButton.disabled = rowsCount >= 10;
});

addColumnButton.addEventListener('click', () => {
  const currentColumnsCount = table.rows[0].cells.length;

  if (currentColumnsCount < 10) {
    for (const row of table.rows) {
      const td = document.createElement('td');

      row.appendChild(td);
    }

    const newColumnsCount = table.rows[0].cells.length;

    removeColumnButton.disabled = newColumnsCount <= 2;
    addColumnButton.disabled = newColumnsCount >= 10;
  }
});

removeColumnButton.addEventListener('click', () => {
  const currentColumnsCount = table.rows[0].cells.length;

  if (currentColumnsCount > 2) {
    for (const row of table.rows) {
      row.deleteCell(currentColumnsCount - 1);
    }

    const newColumnsCount = table.rows[0].cells.length;

    removeColumnButton.disabled = newColumnsCount <= 2;
    addColumnButton.disabled = newColumnsCount >= 10;
  }
});
