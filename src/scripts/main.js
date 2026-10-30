'use strict';

// write code here
const plusRow = document.querySelector('.append-row');
const minusRow = document.querySelector('.remove-row');
const plusColumn = document.querySelector('.append-column');
const minusColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

plusRow.addEventListener('click', () => {
  if (table.rows.length < 10) {
    const row = table.rows[0];
    const rowCopy = row.cloneNode(true);

    document.querySelector('tbody').append(rowCopy);
  }

  if (table.rows.length > 2) {
    minusRow.disabled = false;
  }

  if (table.rows.length === 10) {
    plusRow.disabled = true;
  }
});

minusRow.addEventListener('click', () => {
  if (table.rows.length > 2) {
    const row = table.rows[table.rows.length - 1];

    row.remove();
  }

  if (table.rows.length < 10) {
    plusRow.disabled = false;
  }

  if (table.rows.length === 2) {
    minusRow.disabled = true;
  }
});

plusColumn.addEventListener('click', () => {
  for (const row of table.rows) {
    if (row.cells.length < 10) {
      const cellCopy = row.cells[0].cloneNode(true);

      row.append(cellCopy);
    }
  }

  if (table.rows[0].cells.length > 2) {
    minusColumn.disabled = false;
  }

  if (table.rows[0].cells.length === 10) {
    plusColumn.disabled = true;
  }
});

minusColumn.addEventListener('click', () => {
  for (const row of table.rows) {
    if (row.cells.length > 2) {
      row.cells[row.cells.length - 1].remove();
    }
  }

  if (table.rows[0].cells.length < 10) {
    plusColumn.disabled = false;
  }

  if (table.rows[0].cells.length === 2) {
    minusColumn.disabled = true;
  }
});
