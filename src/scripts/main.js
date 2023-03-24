'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const maxCount = 10;
const minCount = 2;

const container = document.querySelector('.container');

container.addEventListener('click', e => {
  const button = e.target;

  switch (button) {
    case appendRow:
      table.append(table.rows[0].cloneNode(true));
      break;

    case removeRow:
      table.rows[table.rows.length - 1].remove();
      break;

    case appendColumn:
      [...table.rows].forEach(row => {
        row.append(row.cells[0].cloneNode(true));
      });
      break;

    case removeColumn:
      [...table.rows].forEach(row => {
        row.lastChild.remove();
      });
      break;
  }

  appendRow.disabled = table.rows.length >= maxCount;
  removeRow.disabled = table.rows.length <= minCount;
  appendColumn.disabled = table.rows[0].children.length >= maxCount;
  removeColumn.disabled = table.rows[0].children.length <= minCount;
});
