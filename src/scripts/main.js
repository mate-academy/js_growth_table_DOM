'use strict';

const table = document.querySelector('.field');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const MAX_ROWS_COLUMNS = 10;
const MIN_ROWS_COLUMNS = 2;

function updateButtonState() {
  const rows = table.rows.length;
  const columns = table.rows[0].cells.length;

  addRowButton.disabled = rows === MAX_ROWS_COLUMNS;
  removeRowButton.disabled = rows === MIN_ROWS_COLUMNS;
  addColumnButton.disabled = columns === MAX_ROWS_COLUMNS;
  removeColumnButton.disabled = columns === MIN_ROWS_COLUMNS;
}

const addRow = () => {
  const row = table.insertRow(-1);
  const columns = table.rows[0].cells.length;

  for (let i = 0; i < columns; i++) {
    row.insertCell(-1);
  }

  updateButtonState();
};

const removeRow = () => {
  if (table.rows.length > MIN_ROWS_COLUMNS) {
    table.deleteRow(-1);
    updateButtonState();
  }
};

const addColumn = () => {
  const rows = table.rows;
  const columnIndex = rows[0].cells.length;

  for (let i = 0; i < rows.length; i++) {
    rows[i].insertCell(columnIndex);
  }

  updateButtonState();
};

const removeColumn = () => {
  const rows = table.rows;
  const columnIndex = rows[0].cells.length - 1;

  if (columnIndex >= MIN_ROWS_COLUMNS - 1) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].deleteCell(columnIndex);
    }

    updateButtonState();
  }
};

addRowButton.addEventListener('click', addRow);
removeRowButton.addEventListener('click', removeRow);
addColumnButton.addEventListener('click', addColumn);
removeColumnButton.addEventListener('click', removeColumn);

updateButtonState();
