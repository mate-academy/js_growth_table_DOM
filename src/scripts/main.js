'use strict';

// write code here
const table = document.querySelector('table');
const container = document.querySelector('.container');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', e => {
  const item = e.target;
  const itemClass = item.classList[0];

  if (!item.classList.contains('button')) {
    return;
  }

  switch (itemClass) {
    case 'append-row':

      table.append((table.rows[0]).cloneNode(true));

      break;

    case 'remove-row':

      [...table.rows][2].remove();

      break;

    case 'append-column':

      [...table.rows].forEach(row => {
        row.append((row.cells[0]).cloneNode(true));
      });

      break;

    case 'remove-column':

      [...table.rows].forEach(row => {
        [...row.cells][0].remove();
      });

      break;
  }

  const rowCount = [...table.rows].length;
  const columnCount = table.rows[0].cells.length;

  switch (rowCount) {
    case 2:
      removeRow.disabled = true;
      break;

    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      removeRow.disabled = false;
      appendRow.disabled = false;
      break;

    case 10:
      appendRow.disabled = true;
      break;
  }

  switch (columnCount) {
    case 2:
      removeColumn.disabled = true;
      break;

    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      removeColumn.disabled = false;
      appendColumn.disabled = false;
      break;

    case 10:
      appendColumn.disabled = true;
      break;
  }
});
