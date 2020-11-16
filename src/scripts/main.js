'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

appendRow.addEventListener('click', e => {
  if (table.rows.length < 10) {
    table.prepend(table.rows[0].cloneNode(true));
  }
});

removeRow.addEventListener('click', e => {
  if (table.rows.length > 2) {
    table.deleteRow(table.rows.length - 1);
  }
});

appendColumn.addEventListener('click', e => {
  for (const row of table.rows) {
    if (row.cells.length < 10) {
      row.prepend(row.cells[0].cloneNode(true));
    }
  }
});

removeColumn.addEventListener('click', e => {
  for (const row of table.rows) {
    if (row.cells.length > 2) {
      row.cells[row.cells.length - 1].remove();
    }
  }
});
