'use strict';

const container = document.querySelector('.container');

let table = document.querySelector('tbody');
const rows = table.children;

const addRow = container.querySelector('.append-row');
const removeRow = container.querySelector('.remove-row');
const addColumn = container.querySelector('.append-column');
const removeColumn = container.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  const item = e.target;

  switch (item) {
    case addRow:
      const newRow = rows[0].cloneNode(true);

      table.append(newRow);
      break;

    case removeRow:
      table.lastChild.remove();
      break;

    case addColumn:
      [...rows].forEach(row => {
        const newCell = rows[0].querySelector('td').cloneNode(true);

        row.append(newCell);
      });
      break;

    case removeColumn:
      [...rows].forEach(row => {
        row.lastChild.remove();
      });
      break;

    default:
      table = document.querySelector('tbody');
  }
});
