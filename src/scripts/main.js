'use strict';

const tbody = document.querySelector('tbody');
const table = document.querySelector('table');
const rows = table.rows;
let rowCount = 4;
let columnCount = 4;
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

addRowButton.addEventListener('click', () => {
  const rowTr = tbody.children[0].cloneNode(true);

  tbody.append(rowTr);

  rowCount++;

  if (removeRowButton.disabled) {
    removeRowButton.disabled = false;
  }

  if (rowCount === 10) {
    addRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', () => {
  tbody.deleteRow(-1);

  rowCount--;

  if (addRowButton.disabled) {
    addRowButton.disabled = false;
  }

  if (rowCount === 2) {
    removeRowButton.disabled = true;
  }
});

addColumnButton.addEventListener('click', () => {
  for (let i = 0; i < rows.length; i++) {
    rows[i].insertCell(-1);
  }

  columnCount++;

  if (removeColumnButton.disabled) {
    removeColumnButton.disabled = false;
  }

  if (columnCount === 10) {
    addColumnButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', () => {
  for (let i = 0; i < rows.length; i++) {
    rows[i].deleteCell(-1);
  }

  columnCount--;

  if (addColumnButton.disabled) {
    addColumnButton.disabled = false;
  }

  if (columnCount === 2) {
    removeColumnButton.disabled = true;
  }
});
