'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const MAX_SIZE = 10;
const MIN_SIZE = 2;

function updateButtonState() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  appendRowBtn.disabled = rowCount >= MAX_SIZE;
  removeRowBtn.disabled = rowCount <= MIN_SIZE;
  appendColBtn.disabled = colCount >= MAX_SIZE;
  removeColBtn.disabled = colCount <= MIN_SIZE;
}

function appendRow() {
  const rowCount = table.rows.length;

  if (rowCount >= MAX_SIZE) {
    return;
  }

  const colCount = table.rows[0].cells.length;
  const newRow = table.insertRow();

  for (let i = 0; i < colCount; i++) {
    newRow.insertCell();
  }

  updateButtonState();
}

function removeRow() {
  const rowCount = table.rows.length;

  if (rowCount <= MIN_SIZE) {
    return;
  }

  table.deleteRow(-1);
  updateButtonState();
}

function appendColumn() {
  const colCount = table.rows[0].cells.length;

  if (colCount >= MAX_SIZE) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  updateButtonState();
}

function removeColumn() {
  const colCount = table.rows[0].cells.length;

  if (colCount <= MIN_SIZE) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  updateButtonState();
}

appendRowBtn.addEventListener('click', appendRow);
removeRowBtn.addEventListener('click', removeRow);
appendColBtn.addEventListener('click', appendColumn);
removeColBtn.addEventListener('click', removeColumn);

updateButtonState();
