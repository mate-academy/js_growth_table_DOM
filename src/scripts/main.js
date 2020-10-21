'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field');
const rows = field.rows;

const maxGrowthCount = 10;
const minGrowthCount = 2;

appendRow.addEventListener('click', () => {
  removeRow.disabled = false;

  field.append(rows[0].cloneNode(true));

  if (rows.length === maxGrowthCount) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  appendRow.disabled = false;

  rows[rows.length - 1].remove();

  if (rows.length === minGrowthCount) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  removeColumn.disabled = false;

  [...rows].forEach(row => {
    row.append(document.createElement('td'));

    if (row.cells.length === maxGrowthCount) {
      appendColumn.disabled = true;
    }
  });
});

removeColumn.addEventListener('click', () => {
  appendColumn.disabled = false;

  [...rows].forEach(row => {
    row.cells[row.cells.length - 1].remove();

    if (row.cells.length === minGrowthCount) {
      removeColumn.disabled = true;
    }
  });
});
