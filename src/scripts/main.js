'use strict';

const table = document.querySelector('.field');

const container = document.querySelector('.container');

container.onclick = function(e) {
  if (!e.target.classList.contains('button')) {
    return;
  };

  const action = e.target.classList[0];

  switch (action) {
    case 'append-row':
      const row = table.rows[0].cloneNode(true);

      table.tBodies[0].append(row);
      break;

    case 'remove-row':
      table.rows[table.rows.length - 1].remove();
      break;

    case 'append-column':
      for (const elem of table.rows) {
        const newCell = document.createElement('td');

        elem.append(newCell);
      };
      break;

    case 'remove-column':
      for (const elem of table.rows) {
        elem.cells[elem.cells.length - 1].remove();
      };
      break;
  };

  container.querySelector('.append-row').disabled
    = (table.rows.length >= 10) ? 'true' : '';

  container.querySelector('.remove-row').disabled
    = (table.rows.length <= 2) ? 'true' : '';

  container.querySelector('.append-column').disabled
    = (table.rows[0].cells.length >= 10) ? 'true' : '';

  container.querySelector('.remove-column').disabled
    = (table.rows[0].cells.length <= 2) ? 'true' : '';
};
