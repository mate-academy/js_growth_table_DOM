'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const maxTableSize = 10;
const minTableSize = 2;

appendRow.addEventListener('click', () => {
  table.append(table.rows[table.rows.length - 1].cloneNode(true));
  removeRow.disabled = false;

  if (table.rows.length === maxTableSize) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  table.rows[table.rows.length - 1].remove();
  appendRow.disabled = false;

  if (table.rows.length === minTableSize) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  [...table.rows].forEach(element => {
    const cell = document.createElement('td');

    element.append(cell);
    removeColumn.disabled = false;

    if (element.cells.length === maxTableSize) {
      appendColumn.disabled = true;
    }
  });
});

removeColumn.addEventListener('click', () => {
  [...table.rows].forEach(element => {
    element.cells[element.cells.length - 1].remove();
    appendColumn.disabled = false;

    if (element.cells.length === minTableSize) {
      removeColumn.disabled = true;
    }
  });
});
