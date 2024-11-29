'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const table = document.querySelector('.field');

  container.addEventListener('click', (e) => {
    if (e.target.className === 'append-row button') {
      const tr = document.createElement('tr');

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        const td = document.createElement('td');

        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    if (e.target.className === 'append-column button') {
      table.querySelectorAll('tr').forEach((tr) => {
        const td = document.createElement('td');

        tr.appendChild(td);
      });
    }

    if (e.target.className === 'remove-row button') {
      table.deleteRow(-1);
    }

    if (e.target.className === 'remove-column button') {
      table.querySelectorAll('tr').forEach((tr) => {
        const lastColumn = tr.cells[tr.cells.length - 1];

        lastColumn.remove();
      });
    }

    const MAX_ROWS = 10;
    const MIN_ROWS = 2;
    const MAX_COLUMNS = 10;
    const MIN_COLUMNS = 2;

    document.querySelector('.append-row').disabled =
      table.rows.length >= MAX_ROWS;

    document.querySelector('.remove-row').disabled =
      table.rows.length <= MIN_ROWS;

    document.querySelector('.append-column').disabled =
      table.rows[0].cells.length >= MAX_COLUMNS;

    document.querySelector('.remove-column').disabled =
      table.rows[0].cells.length <= MIN_COLUMNS;
  });
});
