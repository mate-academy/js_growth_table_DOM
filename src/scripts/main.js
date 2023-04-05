'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const table = document.querySelector('.field').tBodies[0];

const maxLength = 10;
const minLength = 2;

function updateButtonState() {
  const rowsCount = table.rows.length;
  const columnsCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowsCount >= maxLength;
  removeRowButton.disabled = rowsCount <= minLength;
  appendColumnButton.disabled = columnsCount >= maxLength;
  removeColumnButton.disabled = columnsCount <= minLength;
}

function addRow() {
  const newRow = table.insertRow(-1);

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.insertCell(-1);
  }

  updateButtonState();
}

function removeRow() {
  if (table.rows.length <= minLength) {
    return;
  }

  table.deleteRow(-1);

  updateButtonState();
}

function addColumn() {
  for (const row of table.rows) {
    row.insertCell(-1);
  }

  updateButtonState();
}

function removeColumn() {
  if (table.rows[0].cells.length <= minLength) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  updateButtonState();
}

appendRowButton.addEventListener('click', addRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', addColumn);
removeColumnButton.addEventListener('click', removeColumn);
