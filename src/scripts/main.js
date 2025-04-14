'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const table = document.querySelector('table');

const MAX_ROWS_COUNT = 10;
const MAX_COLUMNS_COUNT = 10;
const MIN_ROWS_COUNT = 2;
const MIN_COLUMNS_COUNT = 2;

function updateButtonState() {
  const rowsCount = table.rows.length;
  const colsCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowsCount >= MAX_ROWS_COUNT;
  removeRowButton.disabled = rowsCount <= MIN_ROWS_COUNT;
  appendColumnButton.disabled = colsCount >= MAX_COLUMNS_COUNT;
  removeColumnButton.disabled = colsCount <= MIN_COLUMNS_COUNT;
}

appendRowButton.addEventListener('click', () => {
  const newRow = table.insertRow();
  const colsCount = table.rows[0].cells.length;

  for (let i = 0; i < colsCount; i++) {
    newRow.insertCell();
  }

  updateButtonState();
});

removeRowButton.addEventListener('click', () => {
  table.deleteRow(-1);

  updateButtonState();
});

appendColumnButton.addEventListener('click', () => {
  for (const row of table.rows) {
    row.insertCell();
  }

  updateButtonState();
});

removeColumnButton.addEventListener('click', () => {
  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  updateButtonState();
});
