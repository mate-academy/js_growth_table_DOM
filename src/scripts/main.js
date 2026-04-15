'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function addRow() {
  if (table.rows.length >= 10) {
    return;
  }

  const countColumns = table.rows[0].cells.length;
  const newRow = table.insertRow();

  for (let i = 0; i < countColumns; i++) {
    newRow.insertCell();
  }
}

function removeRow() {
  if (table.rows.length <= 2) {
    return;
  }

  table.deleteRow(table.rows.length - 1);
}

function addColumn() {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell(row.cells.length);
  }
}

function removeColumn() {
  if (table.rows[0].cells.length <= 2) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(row.cells.length - 1);
  }
}

function updateButtons() {
  const rows = table.rows.length;
  const columns = table.rows[0].cells.length;

  appendRowButton.disabled = rows >= 10;
  removeRowButton.disabled = rows <= 2;
  appendColumnButton.disabled = columns >= 10;
  removeColumnButton.disabled = columns <= 2;
}

container.addEventListener('click', (e) => {
  if (e.target.closest('.append-row')) {
    addRow();
  }

  if (e.target.closest('.remove-row')) {
    removeRow();
  }

  if (e.target.closest('.append-column')) {
    addColumn();
  }

  if (e.target.closest('.remove-column')) {
    removeColumn();
  }

  updateButtons();
});
