'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const container = document.querySelector('.container');
const table = document.querySelector('.field');

container.addEventListener('click', e => {
  if (!e.target.classList.contains('button')) {
    return;
  }

  const rowsLength = table.rows.length;
  const columnsLength = table.rows[0].cells.length;
  // console.log(rowsLength, columnsLength);

  const targetClass = e.target.classList;
  const newCells = document.createElement('tr');

  if (targetClass.contains('append-row') && rowsLength < 10) {
    for (let i = 0; i < columnsLength; i++) {
      const cell = document.createElement('td');

      newCells.append(cell);
    }
    table.children[0].append(newCells);
  }

  if (targetClass.contains('remove-row') && rowsLength > 1) {
    const lastRow = table.rows[rowsLength - 1];

    lastRow.parentNode.removeChild(lastRow);
  }

  if (targetClass.contains('append-column') && columnsLength < 10) {
    for (const i of table.rows) {
      const cell = document.createElement('td');

      i.append(cell);
    }
  }

  if (targetClass.contains('remove-column') && columnsLength > 1) {
    for (const i of table.rows) {
      const child = i.children[0];

      i.removeChild(child);
    }
  }

  // console.log(columnsLength, table.rows[0].cells.length);
  (table.rows.length === 2)
    ? removeRow.setAttribute('disabled', true)
    : removeRow.removeAttribute('disabled');

  (table.rows.length === 10)
    ? addRow.setAttribute('disabled', true)
    : addRow.removeAttribute('disabled');

  (table.rows[0].cells.length === 2)
    ? removeColumn.setAttribute('disabled', true)
    : removeColumn.removeAttribute('disabled');

  (table.rows[0].cells.length === 10)
    ? addColumn.setAttribute('disabled', true)
    : addColumn.removeAttribute('disabled');

  // console.log(table.rows.length, table.rows[0].cells.length)
});
