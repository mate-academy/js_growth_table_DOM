'use strict';

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const MAX_COUNT = 10;
const MIN_COUNT = 2;

const getRowCount = () => table.rows.length;
const getColumnCount = () => table.rows[0].cells.length;

const updateButtonStates = () => {
  const rowCount = getRowCount();
  const columnCount = getColumnCount();

  appendRowButton.disabled = rowCount >= MAX_COUNT;
  appendColumnButton.disabled = columnCount >= MAX_COUNT;
  removeRowButton.disabled = rowCount <= MIN_COUNT;
  removeColumnButton.disabled = columnCount <= MIN_COUNT;
};

const addRow = () => {
  if (getRowCount() >= MAX_COUNT) {
    return;
  }

  const newRow = table.insertRow();
  const columnCount = getColumnCount();

  for (let i = 0; i < columnCount; i++) {
    newRow.insertCell();
  }

  updateButtonStates();
};

const removeRow = () => {
  if (getRowCount() <= MIN_COUNT) {
    return;
  }

  table.deleteRow(-1);
  updateButtonStates();
};

const addColumn = () => {
  if (getColumnCount() >= MAX_COUNT) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  updateButtonStates();
};

const removeColumn = () => {
  if (getColumnCount() <= MIN_COUNT) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  updateButtonStates();
};

appendRowButton.addEventListener('click', addRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', addColumn);
removeColumnButton.addEventListener('click', removeColumn);

updateButtonStates();
