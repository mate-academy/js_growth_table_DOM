'use strict';

const table = document.querySelector('.field');
const tableBody = document.querySelector('tbody');
const rows = table.rows;

const maxSizeTable = 10;
const minSizeTable = 2;

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function appendRow() {
  const insertRow = rows[rows.length - 1].cloneNode(true);

  tableBody.append(insertRow);

  removeRowButton.disabled = false;

  if (rows.length === maxSizeTable) {
    appendRowButton.disabled = true;
  }
}

function removeRow() {
  table.deleteRow(rows.length - 1);

  appendRowButton.disabled = false;

  if (rows.length === minSizeTable) {
    removeRowButton.disabled = true;
  }
}

function appendColumn() {
  for (const row of rows) {
    const indexToInsert = row.cells.length;

    row.insertCell(indexToInsert);
  }

  removeColumnButton.disabled = false;

  if (rows[0].cells.length === maxSizeTable) {
    appendColumnButton.disabled = true;
  }
}

function removeColumn() {
  for (const row of rows) {
    const indexToDelete = row.cells.length - 1;

    row.deleteCell(indexToDelete);
  }

  appendColumnButton.disabled = false;

  if (rows[0].cells.length === minSizeTable) {
    removeColumnButton.disabled = true;
  }
}

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);
