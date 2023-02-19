'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('tbody');

const maxRows = 10;
const maxColumns = 10;
const minRows = 2;
const minColumns = 2;

container.addEventListener('click', e => {
  const className = e.target.className;

  switch (className) {
    case 'append-row button':
      if (table.rows.length < maxRows) {
        const row = table.insertRow(-1);

        [...table.rows[0].cells].forEach((_, i) => row.insertCell(i));
      }
      break;
    case 'remove-row button':
      if (table.rows.length > minRows) {
        table.deleteRow(-1);
      }
      break;
    case 'append-column button':
      if (table.rows[0].cells.length < maxColumns) {
        [...table.rows].forEach((_, i) => table.rows[i].insertCell(-1));
      }
      break;
    case 'remove-column button':
      if (table.rows[0].cells.length > minColumns) {
        [...table.rows].forEach((_, i) => table.rows[i].deleteCell(-1));
      }
      break;
    default:
      break;
  }
});
