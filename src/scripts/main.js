'use strict';

const tbody = document.querySelector('tbody');
const container = document.querySelector('.container');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  const target = e.target;

  const rows = document.querySelectorAll('tr');

  const buttonType = target.classList[0];

  switch (buttonType) {
    case 'append-row':
      tbody.append(rows[0].cloneNode(true));
      break;
    case 'remove-row':
      rows[0].remove();

      break;
    case 'append-column':
      for (const row of rows) {
        row.append(row.cells[0].cloneNode(true));
      }
      break;
    case 'remove-column':
      for (const row of rows) {
        row.cells[0].remove();
      }
      break;

    default:
  }

  appendRowButton.disabled = tbody.rows.length >= 10;
  removeRowButton.disabled = tbody.rows.length <= 2;
  appendColumnButton.disabled = tbody.rows[0].cells.length >= 10;
  removeColumnButton.disabled = tbody.rows[0].cells.length <= 2;
});
