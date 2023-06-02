'use strict';

const table = document.querySelector('tbody');

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const maxRows = 10;
const minRows = 2;
const maxColumns = 10;
const minColumns = 2;

function updateButtonStates() {
  const rowCount = table.querySelectorAll('tr').length;
  const columnCount = table.querySelector('tr').querySelectorAll('td').length;

  addRow.disabled = rowCount >= maxRows;
  removeRow.disabled = rowCount <= minRows;
  addColumn.disabled = columnCount >= maxColumns;
  removeColumn.disabled = columnCount <= minColumns;
}

function addTableRow() {
  const tableRow = table.querySelector('tr');
  const rowCopy = tableRow.cloneNode(true);

  table.append(rowCopy);
  updateButtonStates();
}

function removeTableRow() {
  const tableRows = table.querySelectorAll('tr');
  const lastRow = tableRows[tableRows.length - 1];

  lastRow.remove();
  updateButtonStates();
}

function addTableColumn() {
  const tableRows = table.querySelectorAll('tr');

  tableRows.forEach((row) => {
    const newCell = document.createElement('td');

    row.appendChild(newCell);
  });
  updateButtonStates();
}

function removeTableColumn() {
  const tableRows = table.querySelectorAll('tr');

  tableRows.forEach((row) => {
    const lastCell = row.lastElementChild;

    lastCell.remove();
  });
  updateButtonStates();
}

addRow.addEventListener('click', addTableRow);
removeRow.addEventListener('click', removeTableRow);
addColumn.addEventListener('click', addTableColumn);
removeColumn.addEventListener('click', removeTableColumn);
