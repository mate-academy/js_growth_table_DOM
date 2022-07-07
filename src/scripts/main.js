'use strict';

// write code here
const rowAppend = document.querySelector('.append-row');
const rowRemove = document.querySelector('.remove-row');
const columnAppend = document.querySelector('.append-column');
const columnRemove = document.querySelector('.remove-column');
const table = document.querySelector('table');
const container = document.querySelector('.container');
const MAX = 9;
const MIN = 3;

container.addEventListener('click', (e) => {
  const trAll = document.querySelectorAll('tr');
  const tr = document.querySelector('tr');
  const row = document.createElement('tr');

  switch (e.target) {
    case columnAppend:
      if (table.rows[0].cells.length >= MAX) {
        columnAppend.disabled = true;
      }

      for (const i of trAll) {
        i.insertAdjacentHTML('beforeend', `<td></td>`);
      }

      columnRemove.disabled = false;
      break;

    case rowAppend:
      if (table.rows.length >= MAX) {
        rowAppend.disabled = true;
      }

      for (let i = 0; i < tr.cells.length; i++) {
        const td = document.createElement('td');

        row.append(td);
      }

      table.append(row);

      rowRemove.disabled = false;
      break;

    case rowRemove:
      if (table.rows.length <= MIN) {
        rowRemove.disabled = true;
      }

      table.rows[0].remove();

      rowAppend.disabled = false;
      break;

    case columnRemove:
      if (table.rows[0].cells.length <= MIN) {
        columnRemove.disabled = true;
      }

      for (const i of trAll) {
        i.children[0].remove();
      }

      columnAppend.disabled = false;
      break;
  }
});
