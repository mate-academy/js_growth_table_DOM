'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

addRow.addEventListener('click', () => {
  table.append(table.rows[0].cloneNode(true));
  removeRow.disabled = false;

  if (table.rows.length === 10) {
    addRow.disabled = true;
  }
});

addColumn.addEventListener('click', () => {
  removeColumn.disabled = false;

  [...table.rows].forEach(row => {
    row.append(document.createElement('td'));

    if (row.children.length === 10) {
      addColumn.disabled = true;
    }
  });
});

removeRow.addEventListener('click', () => {
  table.rows[table.rows.length - 1].remove();
  addRow.disabled = false;

  if (table.rows.length === 2) {
    removeRow.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  addColumn.disabled = false;

  [...table.rows].forEach(row => {
    row.lastElementChild.remove();

    if (row.children.length === 2) {
      removeColumn.disabled = true;
    }
  });
});
