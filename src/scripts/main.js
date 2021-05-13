'use strict';

// write code here
/* const appendRow = document.getElementsByClassName('append-row');
const removeRow = document.getElementsByClassName('remove-row');
const appendCol = document.getElementsByClassName('append-column');
const removeCol = document.getElementsByClassName('remove-column');
 */

const table = document.querySelector('.field');
const container = document.querySelector('.container');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  switch (e.target) {
    case appendRow:
      table.append([...table.rows][0].cloneNode(true));
      break;
    case removeRow:
      table.deleteRow(table.rows.length - 1);
      break;
    case appendColumn:
      for (const tr of [...table.rows]) {
        tr.appendChild([...tr.children][0].cloneNode(true));
      }
      break;
    case removeColumn:
      for (const tr of [...table.rows]) {
        tr.removeChild([...tr.children][tr.children.length - 1]);
      }
  }

  table.rows.length === 10
    ? appendRow.disabled = true
    : appendRow.disabled = false;

  [...table.rows][0].children.length === 10
    ? appendColumn.disabled = true
    : appendColumn.disabled = false;

  table.rows.length === 2
    ? removeRow.disabled = true
    : removeRow.disabled = false;

  [...table.rows][0].children.length === 2
    ? removeColumn.disabled = true
    : removeColumn.disabled = false;
});
