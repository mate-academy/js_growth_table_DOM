'use strict';

const buttons = document.querySelectorAll('button');
const table = document.querySelector('.field');
const row = document.querySelector('tr');
const cell = document.querySelector('td');
const min = 2;
const max = 10;

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

[...buttons].forEach((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target) {
      case appendRow:
        table.tBodies[0].append(row.cloneNode(true));
        removeRow.disabled = false;
        break;

      case removeRow:
        table.deleteRow(-1);
        appendRow.disabled = false;
        break;

      case appendCol:
        [...table.rows].forEach((el) => {
          el.append(cell.cloneNode(true));
          removeCol.disabled = false;
        });
        break;

      case removeCol:
        [...table.rows].forEach((el) => {
          el.deleteCell(-1);
          appendCol.disabled = false;
        });
        break;

      default:
        break;
    }

    if (table.rows.length === max) {
      appendRow.disabled = true;
    }

    if (table.rows.length === min) {
      removeRow.disabled = true;
    }

    if (table.rows[0].cells.length === max) {
      appendCol.disabled = true;
    }

    if (table.rows[0].cells.length === min) {
      removeCol.disabled = true;
    }
  });
});
