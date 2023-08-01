'use strict';

const buttons = document.querySelectorAll('.button');
const table = document.querySelector('.field');
const row = document.querySelector('tr');
const cell = document.querySelector('td');
const min = 2;
const max = 10;

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button === appendRow) {
      table.tBodies[0].append(row.cloneNode(true));
      removeRow.disabled = false;
    } else if (button === removeRow) {
      table.deleteRow(1);
      appendRow.disabled = false;
    } else if (button === appendCol) {
      [...table.rows].forEach(el => {
        el.append(cell.cloneNode(true));
        removeCol.disabled = false;
      });
    } else if (button === removeCol) {
      [...table.rows].forEach(el => {
        el.deleteCell(1);
        appendCol.disabled = false;
      });
    }

    appendRow.disabled = (table.rows.length === max);
    removeRow.disabled = (table.rows.length === min);
    appendCol.disabled = (table.rows[0].cells.length === max);
    removeCol.disabled = (table.rows[0].cells.length === min);
  });
});
