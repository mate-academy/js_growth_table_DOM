'use strict';

const table = document.querySelector('table');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const rowsTable = table.rows;

const minLength = 2;
const maxLength = 10;

appendRow.addEventListener('click', () => {
  if (rowsTable.length <= maxLength) {
    table.append(rowsTable[0].cloneNode(true));
  }

  if (rowsTable.length === maxLength) {
    appendRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  if (rowsTable.length >= minLength) {
    rowsTable[0].remove();
  }

  if (rowsTable.length === minLength) {
    removeRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  const columnTable = rowsTable[0].cells;

  for (let i = 0; i < rowsTable.length; i++) {
    if (columnTable.length <= maxLength) {
      rowsTable[i].append(rowsTable[0].cells[0].cloneNode(true));
    }

    if (columnTable.length === maxLength) {
      appendColumn.disabled = true;
    } else {
      removeColumn.disabled = false;
    }
  }
});

removeColumn.addEventListener('click', () => {
  const columnTable = rowsTable[0].cells;

  for (let i = 0; i < rowsTable.length; i++) {
    if (columnTable.length >= minLength) {
      rowsTable[i].cells[0].remove();
    }

    if (columnTable.length === minLength) {
      removeColumn.disabled = true;
    } else {
      appendColumn.disabled = false;
    }
  }
});
