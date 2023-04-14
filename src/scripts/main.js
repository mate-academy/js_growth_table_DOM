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

      table.append(document.querySelector('tr').cloneNode(true));

      if (table.rows.length === 10) {
        e.target.disabled = true;
      }
      break;

    case 'remove-row button':
      document.querySelector('.append-row').disabled = false;

      table.querySelector('tr').remove();

      if (table.rows.length === 2) {
        e.target.disabled = true;
      }
      break;

    case 'append-column button':
      document.querySelector('.remove-column').disabled = false;

      for (const row of table.rows) {
        row.append(document.createElement('td'));
      }

      if (table.rows[0].cells.length === 10) {
        e.target.disabled = true;
      }
      break;

    case 'remove-column button':
      document.querySelector('.append-column').disabled = false;

      for (const row of table.rows) {
        row.querySelector('td').remove();
      }

      if (table.rows[0].cells.length === 2) {
        e.target.disabled = true;
      }
      break;
  }
});
