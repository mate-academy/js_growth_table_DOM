'use strict';

// write code here
const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const MIN_COUNT = 2;
const MAX_COUNT = 10;

const updateButtonStates = () => {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowCount >= MAX_COUNT;
  removeRowButton.disabled = rowCount <= MIN_COUNT;
  appendColumnButton.disabled = columnCount >= MAX_COUNT;
  removeColumnButton.disabled = columnCount <= MIN_COUNT;
};

appendRowButton.addEventListener('click', () => {
  const newRow = table.insertRow();
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    newRow.insertCell();
  }

  updateButtonStates();
});

removeRowButton.addEventListener('click', () => {
  if (table.rows.length > MIN_COUNT) {
    table.deleteRow(-1);
    updateButtonStates();
  }
});

appendColumnButton.addEventListener('click', () => {
  const columnCount = table.rows[0].cells.length;

  if (columnCount < MAX_COUNT) {
    Array.from(table.rows).forEach((row) => row.insertCell());
    updateButtonStates();
  }
});

removeColumnButton.addEventListener('click', () => {
  const columnCount = table.rows[0].cells.length;

  if (columnCount > MIN_COUNT) {
    Array.from(table.rows).forEach((row) => row.deleteCell(-1));
    updateButtonStates();
  }
});

updateButtonStates();
