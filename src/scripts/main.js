'use strict';

const table = document.querySelector('.field');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const lastRow = table.querySelector('tr:last-child');
  const cloneRow = lastRow.cloneNode(true);
  const rowsCount = table.rows.length;

  table.append(cloneRow);

  if (rowsCount >= 9) {
    appendRow.setAttribute('disabled', 'disabled');
  }

  if (rowsCount >= 2) {
    removeRow.removeAttribute('disabled');
  }
});

removeRow.addEventListener('click', () => {
  const lastRow = table.querySelector('tr:last-child');
  const rowsCount = table.rows.length;

  lastRow.remove();

  if (rowsCount <= 10) {
    appendRow.removeAttribute('disabled');
  }

  if (rowsCount <= 3) {
    removeRow.setAttribute('disabled', 'disabled');
  }
});

appendColumn.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  const columnCount = rows[0].cells.length;

  rows.forEach((row) => {
    const cellClone = row.cells[row.cells.length - 1].cloneNode(true);

    row.append(cellClone);
  });

  if (columnCount >= 9) {
    appendColumn.setAttribute('disabled', 'disabled');
  }

  if (columnCount >= 2) {
    removeColumn.removeAttribute('disabled');
  }
});

removeColumn.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  const columnCount = rows[0].cells.length;

  rows.forEach((row) => {
    const lastCell = row.cells[row.cells.length - 1];

    lastCell.remove();
  });

  if (columnCount <= 3) {
    removeColumn.setAttribute('disabled', 'disabled');
  }

  if (columnCount <= 10) {
    appendColumn.removeAttribute('disabled');
  }
});
