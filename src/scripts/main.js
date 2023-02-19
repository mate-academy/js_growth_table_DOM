'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('tbody');

const maxRows = 10;
const maxColumns = 10;
const minRows = 2;
const minColumns = 2;

container.addEventListener('click', e => {
  if (e.target.className === 'append-row button') {
    if (table.rows.length < maxRows) {
      const row = table.insertRow(-1);

      [...table.rows[0].cells].forEach((item, i) => row.insertCell(i));
    }
  } else if (e.target.className === 'remove-row button') {
    if (table.rows.length > minRows) {
      table.deleteRow(-1);
    }
  } else if (e.target.className === 'append-column button') {
    if (table.rows[0].cells.length < maxColumns) {
      [...table.rows].forEach((item, i) => table.rows[i].insertCell(-1));
    }
  } else if (e.target.className === 'remove-column button') {
    if (table.rows[0].cells.length > minColumns) {
      [...table.rows].forEach((item, i) => table.rows[i].deleteCell(-1));
    }
  }
});
