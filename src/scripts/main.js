'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('table.field');

const max = 10;
const min = 2;

function getRows() {
  return table.rows;
}

function updateButtons() {
  const rowsCount = getRows().length;
  const columnCount = getRows()[0].cells.length;

  addRow.disabled = rowsCount >= max;
  removeRow.disabled = rowsCount <= min;

  addColumn.disabled = columnCount >= max;
  removeColumn.disabled = columnCount <= min;
}

addRow.addEventListener('click', () => {
  const rows = getRows();
  const colCount = rows[0].cells.length;
  const newRow = table.insertRow();

  for (let i = 0; i < colCount; i++) {
    newRow.insertCell();
  }

  updateButtons();
});

removeRow.addEventListener('click', () => {
  const rows = getRows();

  if (rows.length > min) {
    table.deleteRow(rows.length - 1);
    updateButtons();
  }
});

addColumn.addEventListener('click', () => {
  const rows = getRows();
  const colCount = rows[0].cells.length;

  if (colCount < max) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].insertCell();
    }
    updateButtons();
  }
});

removeColumn.addEventListener('click', () => {
  const rows = getRows();
  const colCount = rows[0].cells.length;

  if (colCount > min) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].deleteCell(colCount - 1);
    }
    updateButtons();
  }
});

updateButtons();
