'use strict';

const btnAddRow = document.querySelector('.append-row');
const btnAddColumn = document.querySelector('.append-column');
const btnRemoveRow = document.querySelector('.remove-row');
const btnRemoveColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field');
const max = 10;
const min = 2;

function addRow() {
  if (table.rows.length >= max) {
    return;
  }

  const lastRow = table.rows[table.rows.length - 1];
  const cloneRow = lastRow.cloneNode(true);

  for (const cell of cloneRow.cells) {
    cell.textContent = '';
  }

  lastRow.after(cloneRow);
}

function removeRow() {
  if (table.rows.length <= min) {
    return;
  }

  const lastRow = table.rows[table.rows.length - 1];

  lastRow.remove();
}

function addColumn() {
  for (const row of table.rows) {
    if (row.cells.length >= max) {
      return;
    }

    const lastCell = row.cells[row.cells.length - 1];
    const cloneCell = lastCell.cloneNode(true);

    cloneCell.textContent = '';
    lastCell.after(cloneCell);
  }
}

function removeColumn() {
  for (const row of table.rows) {
    if (row.cells.length <= min) {
      return;
    }

    const lastCell = row.cells[row.cells.length - 1];

    lastCell.remove();
  }
}

function updateButtons() {
  const rowsCount = table.rows.length;
  const columnsCount = table.rows[0].cells.length;

  btnAddRow.disabled = rowsCount >= max;
  btnRemoveRow.disabled = rowsCount <= min;

  btnAddColumn.disabled = columnsCount >= max;
  btnRemoveColumn.disabled = columnsCount <= min;
}

document.addEventListener('click', (e) => {
  if (e.target.closest('.append-row')) {
    addRow();
  }

  if (e.target.closest('.append-column')) {
    addColumn();
  }

  if (e.target.closest('.remove-row')) {
    removeRow();
  }

  if (e.target.closest('.remove-column')) {
    removeColumn();
  }

  updateButtons();
});
