'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const table = document.querySelector('table');
let rowCount = 4;
let colCount = 4;

function updateButtons() {
  appendRowBtn.disabled = rowCount >= 10;
  removeRowBtn.disabled = rowCount <= 2;
  appendColumnBtn.disabled = colCount >= 10;
  removeColumnBtn.disabled = colCount <= 2;
}

function addRow() {
  if (rowCount >= 10) {
    return;
  }

  const newRow = document.createElement('tr');

  for (let i = 0; i < colCount; i++) {
    const cell = document.createElement('td');

    cell.textContent = '';
    newRow.appendChild(cell);
  }

  table.appendChild(newRow);
  rowCount++;

  updateButtons();
}

function removeRow() {
  if (rowCount === 2) {
    return;
  }

  table.deleteRow(-1);
  rowCount--;

  updateButtons();
}

function addColumn() {
  if (colCount >= 10) {
    return;
  }

  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => {
    row.appendChild(document.createElement('td'));
  });

  colCount++;

  updateButtons();
}

function removeColumn() {
  if (colCount === 2) {
    return;
  }

  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => {
    row.deleteCell(-1);
  });

  colCount--;

  updateButtons();
}

appendRowBtn.addEventListener('click', addRow);
removeRowBtn.addEventListener('click', removeRow);
appendColumnBtn.addEventListener('click', addColumn);
removeColumnBtn.addEventListener('click', removeColumn);
