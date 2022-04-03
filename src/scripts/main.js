'use strict';

const table = document.querySelector('tbody');
const container = document.querySelector('.container');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', (ev) => {
  switch (ev.target) {
    case appendRow:
      table.append(table.rows[0].cloneNode(true));
      break;

    case removeRow:
      table.rows[table.rows.length - 1].remove();
      break;

    case appendColumn:
      [...table.rows].forEach(row => row.append(row.cells[0].cloneNode(true)));
      break;

    case removeColumn:
      [...table.rows].forEach(row => row.lastChild.remove());
      break;
  }

  appendRow.disabled = table.rows.length >= 10;
  removeRow.disabled = table.rows.length <= 2;
  appendColumn.disabled = table.rows[0].children.length >= 10;
  removeColumn.disabled = table.rows[0].children.length <= 2;
});
