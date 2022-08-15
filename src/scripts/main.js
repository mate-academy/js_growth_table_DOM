'use strict';

const minSize = 2;
const maxSize = 10;

const table = document.querySelector('.field');
const tBody = table.tBodies[0];
const rows = tBody.rows;

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  tBody.appendChild(rows[rows.length - 1].cloneNode(true));

  if (rows.length === maxSize) {
    appendRow.setAttribute('disabled', 'true');
  }

  removeRow.removeAttribute('disabled');
});

removeRow.addEventListener('click', () => {
  rows[rows.length - 1].remove();

  if (rows.length === minSize) {
    removeRow.setAttribute('disabled', 'true');
  }

  appendRow.removeAttribute('disabled');
});

appendColumn.addEventListener('click', () => {
  [...rows].forEach(row => {
    const cells = row.cells;

    row.appendChild(cells[cells.length - 1].cloneNode(true));
  });

  if (rows[0].cells.length === maxSize) {
    appendColumn.setAttribute('disabled', 'true');
  }

  removeColumn.removeAttribute('disabled');
});

removeColumn.addEventListener('click', () => {
  [...rows].forEach(row => {
    const cells = row.cells;

    cells[cells.length - 1].remove();
  });

  if (rows[0].cells.length === minSize) {
    removeColumn.setAttribute('disabled', 'true');
  }

  appendColumn.removeAttribute('disabled');
});
