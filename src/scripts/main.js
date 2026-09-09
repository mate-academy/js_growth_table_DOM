'use strict';

// write code here
const MIN_SIZE = 2;
const MAX_SIZE = 10;

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function getColumnCount() {
  return table.rows[0].cells.length;
}

function updateButtonsState() {
  const rowCount = table.rows.length;
  const columnCount = getColumnCount();

  appendRowButton.disabled = rowCount >= MAX_SIZE;
  removeRowButton.disabled = rowCount <= MIN_SIZE;
  appendColumnButton.disabled = columnCount >= MAX_SIZE;
  removeColumnButton.disabled = columnCount <= MIN_SIZE;
}

appendRowButton.addEventListener('click', () => {
  if (table.rows.length >= MAX_SIZE) {
    return;
  }

  const row = table.insertRow();
  const columnCount = getColumnCount();

  for (let i = 0; i < columnCount; i++) {
    row.insertCell();
  }

  updateButtonsState();
});

removeRowButton.addEventListener('click', () => {
  if (table.rows.length <= MIN_SIZE) {
    return;
  }

  table.deleteRow(-1);
  updateButtonsState();
});

appendColumnButton.addEventListener('click', () => {
  if (getColumnCount() >= MAX_SIZE) {
    return;
  }

  [...table.rows].forEach((row) => {
    row.insertCell();
  });

  updateButtonsState();
});

removeColumnButton.addEventListener('click', () => {
  if (getColumnCount() <= MIN_SIZE) {
    return;
  }

  [...table.rows].forEach((row) => {
    row.deleteCell(-1);
  });

  updateButtonsState();
});

updateButtonsState();
