'use strict';

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const maxRows = 10;
const minRows = 2;
const maxColumns = 10;
const minColumns = 2;

function updateButtonState() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowCount >= maxRows;
  removeRowButton.disabled = rowCount <= minRows;
  appendColumnButton.disabled = columnCount >= maxColumns;
  removeColumnButton.disabled = columnCount <= minColumns;
}

appendRowButton.addEventListener('click', () => {
  const newRow = table.insertRow();
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    newRow.insertCell();
  }
  updateButtonState();
});

removeRowButton.addEventListener('click', () => {
  if (table.rows.length > minRows) {
    table.deleteRow(-1);
  }
  updateButtonState();
});

appendColumnButton.addEventListener('click', () => {
  const rowCount = table.rows.length;

  for (let i = 0; i < rowCount; i++) {
    table.rows[i].insertCell();
  }
  updateButtonState();
});

removeColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length > minColumns) {
    const rowCount = table.rows.length;

    for (let i = 0; i < rowCount; i++) {
      table.rows[i].deleteCell(-1);
    }
  }
  updateButtonState();
});
updateButtonState();
