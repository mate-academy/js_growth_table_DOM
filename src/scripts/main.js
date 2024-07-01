'use strict';

const table = document.querySelector('.field');
const tableRows = table.rows;
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.addEventListener('click', () => {
  const newRow = tableRows[0].cloneNode(true);

  table.tBodies[0].append(newRow);

  if (tableRows.length >= 10) {
    addRow.setAttribute('disabled', '');
  } else {
    removeRow.removeAttribute('disabled');
  }
});

removeRow.addEventListener('click', () => {
  tableRows[0].remove();

  if (tableRows.length <= 2) {
    removeRow.setAttribute('disabled', '');
  } else {
    addRow.removeAttribute('disabled');
  }
});

addColumn.addEventListener('click', () => {
  for (let i = 0; i < tableRows.length; i++) {
    const newCell = tableRows[i].cells[0].cloneNode(true);

    tableRows[i].append(newCell);
  }

  if (tableRows[0].cells.length >= 10) {
    addColumn.setAttribute('disabled', '');
  } else {
    removeColumn.removeAttribute('disabled');
  }
});

removeColumn.addEventListener('click', () => {
  for (let i = 0; i < tableRows.length; i++) {
    tableRows[i].cells[0].remove();
  }

  if (tableRows[0].cells.length <= 2) {
    removeColumn.setAttribute('disabled', '');
  } else {
    addColumn.removeAttribute('disabled');
  }
});
