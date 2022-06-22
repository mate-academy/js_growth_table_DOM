'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const rows = table.rows;

appendRow.addEventListener('click', () => {
  table.append(table.rows[0].cloneNode(true));
  removeRow.disabled = false;

  if (table.rows.length >= 10) {
    appendRow.disabled = true;
  };
});

removeRow.addEventListener('click', () => {
  table.rows[1].remove();
  appendRow.disabled = false;

  if (table.rows.length <= 2) {
    removeRow.disabled = true;
  };
});

appendColumn.addEventListener('click', () => {
  removeColumn.disabled = false;

  for (const row of rows) {
    row.append(row.cells[0].cloneNode(true));

    if (row.cells.length >= 10) {
      appendColumn.disabled = true;
    };
  }
});

removeColumn.addEventListener('click', () => {
  appendColumn.disabled = false;

  for (const row of rows) {
    row.cells[1].remove();

    if (row.cells.length <= 2) {
      removeColumn.disabled = true;
    };
  }
});
