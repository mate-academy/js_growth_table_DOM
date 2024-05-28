'use strict';

const table = document.querySelector('.field');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const MAX_ROWS = 10;
const MIN_ROWS = 2;
const MAX_COLUMNS = 10;
const MIN_COLUMNS = 2;

const updateButtonStates = () => {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRowBtn.disabled = rowCount >= MAX_ROWS;
  removeRowBtn.disabled = rowCount <= MIN_ROWS;
  appendColumnBtn.disabled = columnCount >= MAX_COLUMNS;
  removeColumnBtn.disabled = columnCount <= MIN_COLUMNS;
};

const appendRow = () => {
  const rowCount = table.rows.length;

  if (rowCount >= MAX_ROWS) {
    return;
  }

  const newRow = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.insertCell();
  }

  updateButtonStates();
};

const appendColumn = () => {
  const columnCount = table.rows[0].cells.length;

  if (columnCount >= MAX_COLUMNS) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  updateButtonStates();
};

const removeColumn = () => {
  const columnCount = table.rows[0].cells.length;

  if (columnCount <= MIN_COLUMNS) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  updateButtonStates();
};

const removeRow = () => {
  const rowCount = table.rows.length;

  if (rowCount <= MIN_ROWS) {
    return;
  }

  table.deleteRow(-1);

  updateButtonStates();
};

appendRowBtn.addEventListener('click', appendRow);
appendColumnBtn.addEventListener('click', appendColumn);

removeRowBtn.addEventListener('click', removeRow);
removeColumnBtn.addEventListener('click', removeColumn);
