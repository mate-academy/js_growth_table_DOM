'use strict';

const addRow = document.querySelector('.append-row');
const deleteRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const deleteColumn = document.querySelector('.remove-column');
const table = document.querySelector('table');
const body = document.querySelector('tbody');
let rowCount = table.querySelectorAll('tr').length;
let columnCount = table.querySelectorAll('tr')[0].cells.length;

function buttonDisabled(rowNumber, columnNumber) {
  if (rowNumber === 10) {
    addRow.setAttribute('disabled', 'disabled');
  }

  if (rowNumber < 10) {
    addRow.removeAttribute('disabled');
  }

  if (rowNumber === 2) {
    deleteRow.setAttribute('disabled', 'disabled');
  }

  if (rowNumber > 2) {
    deleteRow.removeAttribute('disabled');
  }

  if (columnNumber === 10) {
    addColumn.setAttribute('disabled', 'disabled');
  }

  if (columnNumber < 10) {
    addColumn.removeAttribute('disabled');
  }

  if (columnNumber === 2) {
    deleteColumn.setAttribute('disabled', 'disabled');
  }

  if (columnNumber > 2) {
    deleteColumn.removeAttribute('disabled');
  }
}

addRow.addEventListener('click', (e) => {
  body.append(body.lastElementChild.cloneNode(true));
  rowCount++;

  buttonDisabled(rowCount, columnCount);
});

deleteRow.addEventListener('click', (e) => {
  const rows = Array.from(table.querySelectorAll('tr'));

  rows[0].remove(true);
  rowCount--;

  buttonDisabled(rowCount, columnCount);
});

addColumn.addEventListener('click', (e) => {
  const rows = Array.from(table.querySelectorAll('tr'));
  columnCount++;

  rows.forEach((row) => {
    const cell = row.cells[0].cloneNode(true);
    row.append(cell);
  });

  buttonDisabled(rowCount, columnCount);
});

deleteColumn.addEventListener('click', (e) => {
  const rows = Array.from(table.querySelectorAll('tr'));
  columnCount--;

  rows.forEach((row) => {
    row.cells[0].remove(true);
  });

  buttonDisabled(rowCount, columnCount);
});
