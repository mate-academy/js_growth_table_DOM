'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('tbody');

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const maxRows = 10;
const maxColumns = 10;
const minRows = 2;
const minColumns = 2;

function disableButton(button) {
  button.setAttribute('disabled', true);
}

function enableButton(button) {
  button.removeAttribute('disabled');
}

container.addEventListener('click', e => {
  const className = e.target.className;

  switch (className) {
    case 'append-row button':
      if (table.rows.length < maxRows) {
        const row = table.insertRow(-1);

        [...table.rows[0].cells].forEach((_, i) => row.insertCell(i));
      }

      if (table.rows.length === maxRows) {
        disableButton(addRow);
      }

      if (table.rows.length > minRows) {
        enableButton(removeRow);
      }

      break;
    case 'remove-row button':
      if (table.rows.length > minRows) {
        table.deleteRow(-1);
      }

      if (table.rows.length === minRows) {
        disableButton(removeRow);
      }

      if (table.rows.length < maxRows) {
        enableButton(addRow);
      }
      break;
    case 'append-column button':
      if (table.rows[0].cells.length < maxColumns) {
        [...table.rows].forEach((_, i) => table.rows[i].insertCell(-1));
      }

      if (table.rows[0].cells.length === maxColumns) {
        disableButton(addColumn);
      }

      if (table.rows[0].cells.length > minColumns) {
        enableButton(removeColumn);
      }
      break;
    case 'remove-column button':
      if (table.rows[0].cells.length > minColumns) {
        [...table.rows].forEach((_, i) => table.rows[i].deleteCell(-1));
      }

      if (table.rows[0].cells.length === minColumns) {
        disableButton(removeColumn);
      }

      if (table.rows[0].cells.length < maxColumns) {
        enableButton(addColumn);
      }
      break;
    default:
      break;
  }
});
