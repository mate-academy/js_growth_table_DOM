'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

document.addEventListener('click', (event) => {
  switch (event.target) {
    case appendRow:
      table.tBodies[0].append(table.rows[0].cloneNode(true));
      break;

    case removeRow:
      table.tBodies[0].lastElementChild.remove();
      break;

    case appendColumn:
      [...table.rows].forEach(row => row.append(document.createElement('td')));
      break;

    case removeColumn:
      [...table.rows].forEach(row => row.lastElementChild.remove());
      break;

    default:
      return false;
  }

  appendRow.disabled = (table.rows.length === 10);
  removeRow.disabled = (table.rows.length === 2);
  appendColumn.disabled = (table.rows[0].cells.length === 10);
  removeColumn.disabled = (table.rows[0].cells.length === 2);
});
