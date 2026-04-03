'use strict';

const MAX_COLUMNS_ROWS = 10;
const MIN_COLUMNS_ROWS = 2;

/**
 * @type {HTMLTableElement}
 */
const table = document.querySelector('table');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const getRowCount = () => table.rows.length;
const getColumnCount = () => table.rows[0].cells.length;

const updateButtonState = (_table) => {
  const lengthRows = getRowCount();
  const lengthColumns = getColumnCount();

  appendRowButton.disabled = lengthRows >= MAX_COLUMNS_ROWS;
  removeRowButton.disabled = lengthRows <= MIN_COLUMNS_ROWS;
  appendColumnButton.disabled = lengthColumns >= MAX_COLUMNS_ROWS;
  removeColumnButton.disabled = lengthColumns <= MIN_COLUMNS_ROWS;
};

const isValidSize = (newLength) => {
  if (newLength < MIN_COLUMNS_ROWS || newLength > MAX_COLUMNS_ROWS) {
    return false;
  }

  return true;
};

removeRowButton.addEventListener('click', () => {
  if (!isValidSize(getRowCount() - 1)) {
    return;
  }

  table.deleteRow(-1);
  updateButtonState(table);
});

appendRowButton.addEventListener('click', () => {
  if (!isValidSize(getRowCount() + 1)) {
    return;
  }

  const row = table.insertRow();

  [...table.rows[0].cells].forEach(() => {
    row.insertCell();
  });

  updateButtonState(table);
});

removeColumnButton.addEventListener('click', () => {
  if (!isValidSize(getColumnCount() - 1)) {
    return;
  }

  [...table.rows].forEach((row) => {
    row.deleteCell(-1);
  });

  updateButtonState(table);
});

appendColumnButton.addEventListener('click', () => {
  if (!isValidSize(getColumnCount() + 1)) {
    return;
  }

  [...table.rows].forEach((row) => {
    row.insertCell();
  });

  updateButtonState(table);
});
