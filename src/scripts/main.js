'use strict';

const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const MIN_ROW = 2;
const MAX_ROW = 10;
const MIN_COL = 2;
const MAX_COL = 10;

addRow.addEventListener('click', () => {
  const newRow = table.rows[0].cloneNode(true);

  table.append(newRow);
  addRow.disabled = table.rows.length === MAX_ROW;
  removeRow.disabled = false;
});

removeRow.addEventListener('click', () => {
  table.deleteRow(-1);
  removeRow.disabled = table.rows.length === MIN_ROW;
  addRow.disabled = false;
});

addColumn.addEventListener('click', () => {
  [...table.rows].forEach((row) => {
    const newCell = row.cells[0].cloneNode(true);

    row.append(newCell);
  });

  addColumn.disabled = table.rows[0].cells.length === MAX_COL;
  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', () => {
  [...table.rows].forEach((row) => {
    row.deleteCell(-1);
  });

  removeColumn.disabled = table.rows[0].cells.length === MIN_COL;
  addColumn.disabled = false;
});
