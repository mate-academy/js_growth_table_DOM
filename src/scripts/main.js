'use strict';

const table = document.querySelector('table');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const rowsTable = table.rows;
const minLength = 2;
const maxLength = 10;

addRow.addEventListener('click', event => {
  if (rowsTable.length < maxLength) {
    table.tBodies[0].append(rowsTable[0].cloneNode(true));
  }

  if (rowsTable.length === maxLength) {
    addRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', event => {
  if (rowsTable.length > minLength) {
    rowsTable[0].remove();
  }

  if (rowsTable.length === minLength) {
    removeRow.disabled = true;
  } else {
    addRow.disabled = false;
  }
});

addColumn.addEventListener('click', event => {
  const columnnTable = rowsTable[0].cells;

  if (columnnTable.length < maxLength) {
    for (const tr of rowsTable) {
      const itemTable = tr.cells[0];

      tr.append(itemTable.cloneNode(true));
    }
  }

  if (columnnTable.length === maxLength) {
    addColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', event => {
  const columnnTable = rowsTable[0].cells;

  if (columnnTable.length > minLength) {
    for (const tr of rowsTable) {
      const itemTable = tr.cells[0];

      itemTable.remove();
    }
  }

  if (columnnTable.length === minLength) {
    removeColumn.disabled = true;
  } else {
    addColumn.disabled = false;
  }
});
