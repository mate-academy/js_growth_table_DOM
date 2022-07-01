'use strict';

// write code here

const addRow = document.querySelector('.append-row');
const dltRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const rmvColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const column = document.querySelector('td');

document.addEventListener('click', (e) => {
  if (e.target === addRow) {
    table.append(table.querySelector('tr').cloneNode(true));
  }

  if (e.target === dltRow) {
    table.querySelector('tr').remove();
  }

  if (e.target === addColumn) {
    for (const ch of table.rows) {
      ch.append(column.cloneNode(true));
    }
  }

  if (e.target === rmvColumn) {
    for (const ch of table.rows) {
      ch.lastElementChild.remove();
    }
  }

  addRow.disabled = table.rows.length >= 10;
  dltRow.disabled = table.rows.length <= 2;
  addColumn.disabled = table.querySelector('tr').children.length >= 10;
  rmvColumn.disabled = table.querySelector('tr').children.length <= 2;
});
