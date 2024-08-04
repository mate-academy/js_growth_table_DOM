'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const maxTableSize = 10;
const minTableSize = 2;

container.addEventListener('click', (e) => {
  switch (e.target.classList[0]) {
    case 'append-row':
      if (table.rows.length < maxTableSize) {
        const newRow = table.insertRow();

        for (let i = 0; i < table.rows[0].cells.length; i++) {
          newRow.insertCell(i);
        }
      }

      if (table.rows.length === maxTableSize) {
        e.target.setAttribute('disabled', '');
      }

      if (table.rows.length > minTableSize) {
        document.querySelector('.remove-row').removeAttribute('disabled');
      }
      break;

    case 'remove-row':
      table.deleteRow(-1);

      if (table.rows.length === minTableSize) {
        e.target.setAttribute('disabled', '');
      }

      if (table.rows.length < maxTableSize) {
        document.querySelector('.append-row').removeAttribute('disabled');
      }
      break;

    case 'append-column':
      if (table.rows[0].cells.length < maxTableSize) {
        for (let i = 0; i < table.rows.length; i++) {
          table.rows[i].insertCell();
        }
      }

      if (table.rows[0].cells.length === maxTableSize) {
        e.target.setAttribute('disabled', '');
      }

      if (table.rows[0].cells.length > minTableSize) {
        document.querySelector('.remove-column').removeAttribute('disabled');
      }
      break;

    case 'remove-column':
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
      }

      if (table.rows[0].cells.length === minTableSize) {
        e.target.setAttribute('disabled', '');
      }

      if (table.rows[0].cells.length < maxTableSize) {
        document.querySelector('.append-column').removeAttribute('disabled');
      }
      break;

    default:
      break;
  }
});
