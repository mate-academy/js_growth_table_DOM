'use strict';

const maxRows = 10;
const minRows = 2;
const maxColumns = 10;
const minColumns = 2;

const addRow = document.querySelector('.append-row');
const remRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const remColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

function updateButtonStates() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  addRow.disabled = rowCount >= maxRows;
  remRow.disabled = rowCount <= minRows;
  addColumn.disabled = columnCount >= maxColumns;
  remColumn.disabled = columnCount <= minColumns;
}

function appendRow() {
  const newRow = table.insertRow(-1);

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    const cell = newRow.insertCell(-1);

    cell.textContent = '';
  }

  updateButtonStates();
}

function removeRow() {
  if (table.rows.length > minRows) {
    table.deleteRow(-1);
    updateButtonStates();
  }
}

function appendColumn() {
  for (let i = 0; i < table.rows.length; i++) {
    const cell = table.rows[i].insertCell(-1);

    cell.textContent = '';
  }

  updateButtonStates();
}

function removeColumn() {
  if (table.rows[0].cells.length > minColumns) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }

    updateButtonStates();
  }
}

updateButtonStates();

addRow.addEventListener('click', appendRow);
remRow.addEventListener('click', removeRow);
addColumn.addEventListener('click', appendColumn);
remColumn.addEventListener('click', removeColumn);
