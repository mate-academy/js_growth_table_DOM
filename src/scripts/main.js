'use strict';

const buttons = document.querySelectorAll('.button');
const table = document.querySelector('table');
const firstRow = table.rows[0];

buttons.forEach((button) => {
  button.addEventListener('click', (ev) => {
    const buttonClass = button.classList[0];

    switch (buttonClass) {
      case 'append-row':
        if (table.rows.length < 10) {
          const newRow = table.insertRow();

          for (let cell = 0; cell < firstRow.cells.length; cell++) {
            const newCell = newRow.insertCell(cell);

            newCell.textContent = '';
          }
        }

        break;
      case 'remove-row':
        if (table.rows.length > 2) {
          table.deleteRow(-1);
        }
        break;
      case 'append-column':
        if (table.rows[0].cells.length < 10) {
          const rows = document.querySelectorAll('tr');

          rows.forEach((curRow) => {
            const newCell = curRow.insertCell(-1);

            newCell.textContent = '';
          });
        }
        break;
      case 'remove-column':
        if (firstRow.cells.length > 2) {
          for (const curRow of table.rows) {
            curRow.deleteCell(-1);
          }
        }
        break;
    }
  });
});
