'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('table');
const min = 2;
const max = 10;

appendRow.addEventListener('click', (el) => {
  if (table.rows.length < max) {
    const newRow = table.rows[0].cloneNode(true);

    table.append(newRow);
  }
});

removeRow.addEventListener('click', (el) => {
  if (table.rows.length > 2) {
    table.deleteRow(0);
  }
});

appendColumn.addEventListener('click', (el) => {
  let count = 0;

  for (const row of table.rows) {
    count = row.cells.length;
  }

  if (count < max) {
    for (const row of table.rows) {
      row.insertBefore(
        row.children[0].cloneNode(true),
        row.children[table.rows[0].cells.length - 1]);
    }
  }
});

removeColumn.addEventListener('click', (el) => {
  let count = 0;

  for (const row of table.rows) {
    count = row.cells.length;
  }

  if (count > min) {
    for (const row of table.rows) {
      row.deleteCell(0);
    }
  }
});
