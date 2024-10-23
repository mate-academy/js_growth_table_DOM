'use strict';

const table = document.querySelector('.field');
const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const MAX_ROWS = 10;
const MIN_ROWS = 2;
const MAX_COLUMNS = 10;
const MIN_COLUMNS = 2;

function addRow() {
  const rowCount = table.rows.length;

  if (rowCount < MAX_ROWS) {
    const newRow = document.createElement('tr');
    const cellCount = table.rows[0].cells.length;

    for (let i = 0; i < cellCount; i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }

    table.appendChild(newRow);
  }

  updateButtons();
}

function removeRow() {
  const rowCount = table.rows.length;

  if (rowCount > MIN_ROWS) {
    table.deleteRow(rowCount - 1);
  }

  updateButtons();
}

function addColumn() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  if (columnCount < MAX_COLUMNS) {
    for (let i = 0; i < rowCount; i++) {
      const newCell = document.createElement('td');

      table.rows[i].appendChild(newCell);
    }
  }

  updateButtons();
}

function removeColumn() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  if (columnCount > MIN_COLUMNS) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].deleteCell(columnCount - 1);
    }
  }

  updateButtons();
}

function updateButtons() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  addRowBtn.disabled = rowCount >= MAX_ROWS;
  removeRowBtn.disabled = rowCount <= MIN_ROWS;

  addColumnBtn.disabled = columnCount >= MAX_COLUMNS;
  removeColumnBtn.disabled = columnCount <= MIN_COLUMNS;
}

addRowBtn.addEventListener('click', addRow);
removeRowBtn.addEventListener('click', removeRow);
addColumnBtn.addEventListener('click', addColumn);
removeColumnBtn.addEventListener('click', removeColumn);

updateButtons();
