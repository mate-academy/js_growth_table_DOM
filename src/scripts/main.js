'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const container = document.querySelector('.container');
const table = document.querySelector('.field');
const rows = table.rows;

container.addEventListener('click', (et) => {
  const target = et.target.closest('.button');

  if (!target || target.disabled) {
    return;
  }

  switch (target) {
    case appendRow:
      table.append(table.rows[0].cloneNode(true));
      removeRow.disabled = false;
      appendRow.disabled = table.rows.length >= 10;
      break;

    case removeRow:
      table.rows[1].remove();
      appendRow.disabled = false;
      removeRow.disabled = table.rows.length <= 2;
      break;

    case appendColumn:
      removeColumn.disabled = false;

      for (const row of rows) {
        row.append(row.cells[0].cloneNode(true));
        appendColumn.disabled = row.cells.length >= 10;
      };
      break;

    case removeColumn:
      appendColumn.disabled = false;

      for (const row of rows) {
        row.cells[1].remove();

        removeColumn.disabled = row.cells.length <= 2;
      };
      break;
  }
});
