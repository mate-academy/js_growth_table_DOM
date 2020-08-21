'use strict';

// write code here
const table = document.querySelector('table');

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const addCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

const rowsTable = table.rows;

const minSize = 2;
const maxSize = 10;

function addLine() {
  if (rowsTable.length < maxSize) {
    table.tBodies[0].append(rowsTable[0].cloneNode(true));
  }

  if (rowsTable.length === maxSize) {
    addRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }
}

function removeLine() {
  if (rowsTable.length > minSize) {
    rowsTable[0].remove();
  }

  if (rowsTable.length === minSize) {
    removeRow.disabled = true;
  } else {
    addRow.disabled = false;
  }
}

function addColumn() {
  const columnnTable = rowsTable[0].cells;

  if (columnnTable.length < maxSize) {
    for (const tr of rowsTable) {
      const itemTable = tr.cells[0];

      tr.append(itemTable.cloneNode(true));
    }
  }

  if (columnnTable.length === maxSize) {
    addCol.disabled = true;
  } else {
    removeCol.disabled = false;
  }
}

function removeColumn() {
  const columnnTable = rowsTable[0].cells;

  if (columnnTable.length > minSize) {
    for (const tr of rowsTable) {
      const itemTable = tr.cells[0];

      itemTable.remove();
    }
  }

  if (columnnTable.length === minSize) {
    removeCol.disabled = true;
  } else {
    addCol.disabled = false;
  }
}

addRow.addEventListener('click', addLine);
removeRow.addEventListener('click', removeLine);
addCol.addEventListener('click', addColumn);
removeCol.addEventListener('click', removeColumn);
