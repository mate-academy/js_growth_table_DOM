'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('table');
const tableRows = table.rows;

let rowLength = tableRows[0].cells.length;
let columnLength = tableRows.length;

appendRow.addEventListener('click', (events) => {
  columnLength++;

  removeRow.disabled = false;

  table.append(tableRows[0].cloneNode(true));

  if (columnLength >= 10) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', (events) => {
  columnLength--;

  appendRow.disabled = false;

  tableRows[tableRows.length - 1].remove();

  if (columnLength <= 2) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', (events) => {
  rowLength++;

  removeColumn.disabled = false;

  for (const row of tableRows) {
    row.append(row.cells[0].cloneNode(true));
  }

  if (rowLength >= 10) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', (events) => {
  rowLength--;

  appendColumn.disabled = false;

  for (const row of tableRows) {
    row.cells[row.cells.length - 1].remove();
  }

  if (rowLength <= 2) {
    removeColumn.disabled = true;
  }
});
