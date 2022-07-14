'use strict';

const table = document.querySelector('.field');

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

const maxLength = 10;
const minLength = 2;

addRow.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');
  const cellsCount = rows[0].cells.length;
  const newRow = table.insertRow();

  for (let cellIndex = 0; cellIndex < cellsCount; cellIndex++) {
    newRow.insertCell(cellIndex);
  }

  addRow.disabled = rows.length === maxLength - 1;
  removeRow.disabled = rows.length === minLength + 1;
});

removeRow.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  table.deleteRow(rows.length - 1);

  addRow.disabled = rows.length === maxLength - 1;
  removeRow.disabled = rows.length === minLength + 1;
});

addCol.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  rows.forEach(row => row.insertCell());

  addCol.disabled = rows[0].cells.length === maxLength;
  removeCol.disabled = rows[0].cells.length === minLength;
});

removeCol.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  rows.forEach(row => row.deleteCell(rows[0].cells.length - 1));

  removeCol.disabled = rows[0].cells.length === minLength;
  addCol.disabled = rows[0].cells.length === maxLength;
});
