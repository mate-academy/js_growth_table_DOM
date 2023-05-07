'use strict';

const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const maxLength = 10;
const minLength = 2;

addRow.addEventListener('click', (e) => {
  const rowCount = table.rows.length;
  const cellCount = table.rows[0].cells.length;
  const row = table.insertRow(rowCount);

  for (let i = 0; i < cellCount; i++) {
    row.insertCell(i);
  }

  if (table.rows.length >= maxLength) {
    addRow.setAttribute('disabled', 'true');
  }

  removeRow.removeAttribute('disabled');
});

removeRow.addEventListener('click', (e) => {
  const rowCount = table.rows.length;

  table.deleteRow(rowCount - 1);

  if (table.rows.length <= minLength) {
    removeRow.setAttribute('disabled', 'true');
  }

  addRow.removeAttribute('disabled');
});

addColumn.addEventListener('click', (e) => {
  const rowArray = [...table.rows];
  const cellCount = table.rows[0].cells.length;

  for (const row of rowArray) {
    row.children[cellCount - 1].after(row.children[0].cloneNode(true));
  }

  if (table.rows[0].cells.length >= maxLength) {
    addColumn.setAttribute('disabled', 'true');
  }

  removeColumn.removeAttribute('disabled');
});

removeColumn.addEventListener('click', (e) => {
  const rowArray = [...table.rows];
  const cellCount = table.rows[0].cells.length;

  for (const row of rowArray) {
    row.children[cellCount - 1].remove();
  }

  if (table.rows[0].cells.length <= minLength) {
    removeColumn.setAttribute('disabled', 'true');
  }

  addColumn.removeAttribute('disabled');
});
