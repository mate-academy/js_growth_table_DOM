'use strict';

// write code here
let rowCount = 4;
let columnCount = 4;
const maxCount = 10;
const minCount = 2;

const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

function updateButtons() {
  appendRowBtn.disabled = rowCount >= maxCount;
  removeRowBtn.disabled = rowCount <= minCount;
  appendColumnBtn.disabled = columnCount >= maxCount;
  removeColumnBtn.disabled = columnCount <= minCount;
}

function addRow() {
  if (rowCount < maxCount) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < columnCount; i++) {
      const cell = document.createElement('td');

      newRow.appendChild(cell);
    }

    table.appendChild(newRow);
    rowCount++;
    updateButtons();
  }
}

function removeRow() {
  if (rowCount > minCount) {
    table.deleteRow(-1);
    rowCount--;
    updateButtons();
  }
}

function addColumn() {
  if (columnCount < maxCount) {
    Array.from(table.rows).forEach((row) => {
      const cell = document.createElement('td');

      row.appendChild(cell);
    });

    columnCount++;
    updateButtons();
  }
}

function removeColumn() {
  if (columnCount > minCount) {
    Array.from(table.rows).forEach((row) => {
      row.deleteCell(-1);
    });

    columnCount--;
    updateButtons();
  }
}

appendRowBtn.addEventListener('click', addRow);
removeRowBtn.addEventListener('click', removeRow);
appendColumnBtn.addEventListener('click', addColumn);
removeColumnBtn.addEventListener('click', removeColumn);

updateButtons();
