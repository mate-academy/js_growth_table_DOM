'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('table');
const rows = table.rows;

let rowLimit = rows.length;
let columnLimit = rows[0].children.length;

document.addEventListener('click', e => {
  const targeted = e.target.classList[0];

  if (targeted === 'append-row') {
    const cloneRow = rows[0].cloneNode(true);

    table.append(cloneRow);

    rowLimit++;
  }

  if (targeted === 'remove-row') {
    rows[rows.length - 1].remove();

    rowLimit--;
  }

  if (targeted === 'append-column') {
    for (const row of rows) {
      const cloneColumn = row.lastElementChild.cloneNode(true);

      row.lastElementChild.after(cloneColumn);
    }

    columnLimit++;
  }

  if (targeted === 'remove-column') {
    for (const row of rows) {
      row.lastElementChild.remove();
    }

    columnLimit--;
  }

  addRow.disabled = rowLimit > 10;
  removeRow.disabled = rowLimit < 3;
  addColumn.disabled = columnLimit > 10;
  removeColumn.disabled = columnLimit < 3;
});
