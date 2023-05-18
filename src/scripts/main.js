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

  const maxElements = 10;
  const minElements = 2;
  const rowsNumber = rows.length;
  const columsNumber = rows[0].children.length;

  if (rowsNumber >= maxElements) {
    addRow.disabled = true;
  } else if (addRow.disabled && rowsNumber < maxElements) {
    addRow.disabled = false;
  }

  if (rowsNumber <= minElements) {
    removeRow.disabled = true;
  } else if (removeRow.disabled && rowsNumber >= minElements) {
    removeRow.disabled = false;
  }

  if (columsNumber >= maxElements) {
    addColumn.disabled = true;
  } else if (addColumn.disabled && columsNumber <= maxElements) {
    addColumn.disabled = false;
  }

  if (columsNumber <= minElements) {
    removeColumn.disabled = true;
  } else if (removeColumn.disabled && columsNumber >= minElements) {
    removeColumn.disabled = false;
  }
});
