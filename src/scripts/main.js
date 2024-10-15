'use strict';

const addRowBtn = document.querySelector('.append-row');
const addColumnBtn = document.querySelector('.append-column');
const deleteRowBtn = document.querySelector('.remove-row ');
const deleteColumnBtn = document.querySelector('.remove-column');

const table = document.querySelector('.field');

const maxCount = 10;
const minCount = 2;
let rowCount = table.rows.length;
let columnCount = table.rows[0].cells.length;

function updateTableSize() {
  rowCount = table.rows.length;
  columnCount = table.rows[0]?.cells.length || 0;
}

function updateBtnsStates() {
  addRowBtn.disabled = rowCount >= maxCount;
  deleteRowBtn.disabled = rowCount <= minCount;
  addColumnBtn.disabled = columnCount >= maxCount;
  deleteColumnBtn.disabled = columnCount <= minCount;
}

addRowBtn.addEventListener('click', () => {
  if (rowCount >= maxCount) {
    return;
  }

  const newRow = table.insertRow();

  for (let i = 0; i < columnCount; i++) {
    const newCell = newRow.insertCell();

    newCell.textContent = '';
  }

  updateTableSize();
  updateBtnsStates();
});

deleteRowBtn.addEventListener('click', () => {
  table.deleteRow(-1);

  updateTableSize();
  updateBtnsStates();
});

addColumnBtn.addEventListener('click', () => {
  if (columnCount >= maxCount) {
    return;
  }

  for (let i = 0; i < rowCount; i++) {
    const cell = table.rows[i].insertCell();

    cell.textContent = '';
  }

  updateTableSize();
  updateBtnsStates();
});

deleteColumnBtn.addEventListener('click', () => {
  for (let i = 0; i < rowCount; i++) {
    table.rows[i].deleteCell(-1);
  }

  updateTableSize();
  updateBtnsStates();
});

updateTableSize();
updateBtnsStates();
