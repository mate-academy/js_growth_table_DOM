'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field').querySelector('tbody');

const MIN = 2;
const MAX = 10;

let currentRowAmount = table.querySelectorAll('tr').length;
let currentColumnAmount = table.querySelectorAll('tr')[0].cells.length;

function addNewRow() {
  const newRow = document.createElement('tr');

  for (let i = 0; i < currentColumnAmount; i++) {
    const newCell = document.createElement('td');

    newRow.append(newCell);
  }

  table.append(newRow);
  currentRowAmount++;
  setDisable();
}

function deleteRow() {
  const row = document.querySelector('tr');

  table.removeChild(row);
  currentRowAmount--;
  setDisable();
}

function addNewColumn() {
  table.querySelectorAll('tr').forEach((row) => {
    const newCell = document.createElement('td');

    row.append(newCell);
  });

  currentColumnAmount++;
  setDisable();
}

function deleteColumn() {
  table.querySelectorAll('tr').forEach((row) => {
    const cell = row.querySelector('td');

    row.removeChild(cell);
  });

  currentColumnAmount--;
  setDisable();
}

function setDisable() {
  addRow.disabled = currentRowAmount === MAX;
  removeRow.disabled = currentRowAmount === MIN;
  addColumn.disabled = currentColumnAmount === MAX;
  removeColumn.disabled = currentColumnAmount === MIN;
}

addRow.addEventListener('click', () => {
  addNewRow();
});

removeRow.addEventListener('click', () => {
  deleteRow();
});

addColumn.addEventListener('click', () => {
  addNewColumn();
});

removeColumn.addEventListener('click', () => {
  deleteColumn();
});
