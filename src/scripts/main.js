'use strict';

const field = document.querySelector('.field');
const tbody = field.querySelector('tbody');

const selectors = [
  '.append-row',
  '.remove-row',
  '.append-column',
  '.remove-column',
];

const buttons = selectors.map((selector) => document.querySelector(selector));

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const rows = field.querySelectorAll('tr');

    switch (index) {
      case 0:
        if (rows.length < 10) {
          tbody.appendChild(rows[0].cloneNode(true));
        }
        break;
      case 1:
        if (rows.length > 2) {
          const lastRow = rows.length - 1;

          tbody.removeChild(rows[lastRow]);
        }
        break;
      case 2:
        if (rows[0].cells.length < 10) {
          rows.forEach((row) => {
            row.appendChild(document.createElement('td'));
          });
        }
        break;
      case 3:
        if (rows[0].cells.length > 2) {
          rows.forEach((row) => {
            row.removeChild(row.cells[row.cells.length - 1]);
          });
        }
        break;
    }

    const updatedRows = field.querySelectorAll('tr');

    buttons[0].disabled = updatedRows.length >= 10;
    buttons[1].disabled = updatedRows.length <= 2;
    buttons[2].disabled = updatedRows[0].cells.length >= 10;
    buttons[3].disabled = updatedRows[0].cells.length <= 2;
  });
});
