'use strict';

const table = document.querySelector('.field');
const tableBody = document.querySelector('tbody');
const rows = table.rows;

const maxCount = 10;
const minCount = 2;

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function append(cells, removeButton, addButton) {
  if (cells.length >= minCount) {
    removeButton.removeAttribute('disabled');
  }

  if (cells.length === maxCount) {
    addButton.setAttribute('disabled', true);
  }
}

function remove(cells, removeButton, addButton) {
  if (cells.length === minCount) {
    removeButton.setAttribute('disabled', true);
  }

  if (cells.length <= maxCount) {
    addButton.removeAttribute('disabled');
  }
}

function appendRow() {
  const insertRow = rows[rows.length - 1].cloneNode(true);

  tableBody.append(insertRow);

  append(
    rows, removeRowButton, appendRowButton
  );
}

function removeRow() {
  table.deleteRow(rows.length - 1);

  remove(rows, removeRowButton, appendRowButton);
}

function appendColumn() {
  for (const row of rows) {
    const indexToInsert = row.cells.length;

    row.insertCell(indexToInsert);
  }

  append(
    rows[0].cells, removeColumnButton, appendColumnButton
  );
}

function removeColumn() {
  for (const row of rows) {
    const indexToDelete = row.cells.length - 1;

    row.deleteCell(indexToDelete);
  }

  remove(rows[0].cells, removeColumnButton, appendColumnButton);
}

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);
