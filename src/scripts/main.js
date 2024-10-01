'use strict';

const table = document.querySelector('table');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const MAX_COUNT = 10;
const MIN_COUNT = 2;

function updateButtonState() {
  const rowsCount = table.rows.length;
  const colsCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowsCount >= MAX_COUNT;
  removeRowButton.disabled = rowsCount <= MIN_COUNT;
  appendColumnButton.disabled = colsCount >= MAX_COUNT;
  removeColumnButton.disabled = colsCount <= MIN_COUNT;
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

removeColumnButton.addEventListener('click', () => {
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    rows[i].deleteCell(-1);
  }

  updateButtonState();
});

appendColumnButton.addEventListener('click', () => {
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    rows[i].insertCell();
  }

  updateButtonState();
});
