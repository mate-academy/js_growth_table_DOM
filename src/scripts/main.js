'use strict';

const container = document.querySelector('.container');

const table = document.querySelector('table');

container.addEventListener('click', (e) => {
  if (!e.target.classList.contains('button')) {
    return;
  };

  switch (e.target.className) {
    case 'append-row button':
      document.querySelector('.remove-row').disabled = false;

      if (table.rows.length < 10) {
        table.append(document.querySelector('tr').cloneNode(true));
      } else {
        e.target.disabled = true;
      }
      break;

    case 'remove-row button':
      document.querySelector('.append-row').disabled = false;

      if (table.rows.length > 2) {
        table.querySelector('tr').remove();
      } else {
        e.target.disabled = true;
      }
      break;

    case 'append-column button':
      if (table.rows[0].cells.length < 10) {
        for (const row of table.rows) {
          row.append(document.createElement('td'));
        }
      } else {
        e.target.disabled = true;
      }
      break;

    case 'remove-column button':
      document.querySelector('.append-column').disabled = false;

      if (table.rows[0].cells.length > 2) {
        for (const row of table.rows) {
          row.querySelector('td').remove();
        }
      } else {
        e.target.disabled = true;
      }
      break;
  }
});
