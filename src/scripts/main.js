'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const deleteRow = document.querySelector('.remove-row');
const addCol = document.querySelector('.append-column');
const deleteCol = document.querySelector('.remove-column');

container.addEventListener('click', e => {
  const choosenButton = e.target.classList[0];

  switch (choosenButton) {
    case 'append-row':
      table.append(table.rows[0].cloneNode(true));
      deleteRow.disabled = false;

      if (table.rows.length === 10) {
        addRow.disabled = true;
      }
      break;

    case 'remove-row':
      table.rows[0].remove();
      addRow.disabled = false;

      if (table.rows.length === 2) {
        deleteRow.disabled = true;
      }
      break;

    case 'append-column':
      [...table.rows].forEach(el => {
        const cell = document.createElement('td');

        el.append(cell);
      });

      deleteCol.disabled = false;

      if (table.rows[0].cells.length === 10) {
        addCol.disabled = true;
      }
      break;

    case 'remove-column':
      [...table.rows].forEach(el => el.cells[0].remove());

      addCol.disabled = false;

      if (table.rows[0].cells.length === 2) {
        deleteCol.disabled = true;
      }
      break;

    default: break;
  }
});
