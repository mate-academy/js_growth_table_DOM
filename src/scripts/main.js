'use strict';

const addRow = document.querySelector('.append-row');
const delRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const delColumn = document.querySelector('.remove-column');
const container = document.querySelector('.container');
const table = document.querySelector('tbody');

container.addEventListener('click', (e) => {
  switch (e.target.classList[0]) {
    case 'append-column':
      [...table.rows].forEach(row => {
        row.append(table.rows[0].children[0].cloneNode(true));
      });
      break;

    case 'append-row':
      table.append(table.firstElementChild.cloneNode(true));
      break;

    case 'remove-row':
      table.lastElementChild.remove();
      break;

    case 'remove-column':
      [...table.rows].forEach(row => row.lastElementChild.remove());
      break;
    default:
      break;
  }

  addColumn.disabled = table.rows[0].children.length >= 10;
  addRow.disabled = table.rows.length >= 10;
  delRow.disabled = table.rows.length <= 2;
  delColumn.disabled = table.rows[0].children.length <= 2;
});
