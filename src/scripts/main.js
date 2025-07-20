'use strict';

const table = document.querySelector('.field');
const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

function addRow() {
  const newRow = document.createElement('tr');
  const colCount = table.rows.length > 0 ? table.rows[0].cells.length : 2;

  for (let i = 0; i < colCount; i++) {
    newRow.append(document.createElement('td'));
  }

  table.append(newRow);
  updateButtonsState();
}

function removeRow() {
  const rowCount = table.rows.length;

  if (rowCount > 2) {
    table.rows[rowCount - 1].remove();
    updateButtonsState();
  }
}

function addColumn() {
  for (const row of table.rows) {
    row.append(document.createElement('td'));
  }
  updateButtonsState();
}

function removeColumn() {
  for (const row of table.rows) {
    row.lastElementChild?.remove();
  }
  updateButtonsState();
}

function updateButtonsState() {
  const rowCount = table.rows.length;
  const colCount = table.rows.length > 0 ? table.rows[0].cells.length : 0;

  removeRowBtn.disabled = rowCount <= 2;
  addRowBtn.disabled = rowCount >= 10;

  removeColumnBtn.disabled = colCount <= 2;
  addColumnBtn.disabled = colCount >= 10;
}

addRowBtn.addEventListener('click', addRow);
removeRowBtn.addEventListener('click', removeRow);
addColumnBtn.addEventListener('click', addColumn);
removeColumnBtn.addEventListener('click', removeColumn);

updateButtonsState();
