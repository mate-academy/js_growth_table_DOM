'use strict';

const buttons = document.querySelectorAll('.button');
const table = document.querySelector('table');
const firstRow = table.rows[0];

buttons.forEach((button) => {
  button.addEventListener('click', (ev) => {
    const buttonClass = button.classList;

    if (buttonClass.contains('append-row')) {
      if (table.rows.length < 10) {
        const newRow = table.insertRow();

        for (let cell = 0; cell < firstRow.cells.length; cell++) {
          const newCell = newRow.insertCell(cell);

          newCell.textContent = '';
        }
      }
    }

    if (buttonClass.contains('remove-row')) {
      if (table.rows.length > 2) {
        table.deleteRow(-1);
      }
    }

    if (buttonClass.contains('append-column')) {
      if (table.rows[0].cells.length < 10) {
        const rows = document.querySelectorAll('tr');

        rows.forEach((curRow) => {
          const newCell = curRow.insertCell(-1);

          newCell.textContent = '';
        });
      }
    }

    if (buttonClass.contains('remove-column')) {
      if (firstRow.cells.length > 2) {
        for (const curRow of table.rows) {
          curRow.deleteCell(-1);
        }
      }
    }
  });
});
