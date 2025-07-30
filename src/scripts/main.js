'use strict';

const table = document.querySelector('.field');
const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const minSize = 2;
const maxSize = 10;

function updateButtonStates() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  addRowBtn.disabled = rowCount >= maxSize;
  removeRowBtn.disabled = rowCount <= minSize;
  addColBtn.disabled = colCount >= maxSize;
  removeColBtn.disabled = colCount <= minSize;
}

function addRow() {
  const columnCount = table.rows[0].cells.length;
  const newRow = table.insertRow();
  for (let i = 0; i < columnCount; i += 1) {
    newRow.insertCell();
  }
  updateButtonStates();
}

function removeRow() {
  if (table.rows.length > minSize) {
    table.deleteRow(-1);
  }
  updateButtonStates();
}

function addColumn() {
  if (table.rows[0].cells.length < maxSize) {
    for (let i = 0; i < table.rows.length; i += 1) {
      table.rows[i].insertCell();
    }
  }
  updateButtonStates();
}

function removeColumn() {
  const columnCount = table.rows[0].cells.length;
  if (columnCount > minSize) {
    for (let i = 0; i < table.rows.length; i += 1) {
      table.rows[i].deleteCell(-1);
    }
  }
  updateButtonStates();
}

addRowBtn.addEventListener('click', addRow);
removeRowBtn.addEventListener('click', removeRow);
addColBtn.addEventListener('click', addColumn);
removeColBtn.addEventListener('click', removeColumn);

updateButtonStates();
