'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');

appendRow.addEventListener('click', () => {
  removeRow.disabled = false;
  table.append(table.rows[0].cloneNode(true));

  if (table.rows.length === 10) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  appendRow.disabled = false;
  table.rows[0].remove();

  if (table.rows.length === 2) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  removeColumn.disabled = false;

  [...table.rows].forEach(row => {
    row.append(row.children[0].cloneNode(true));
  });

  if (table.rows[0].children.length === 10) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  appendColumn.disabled = false;

  [...table.rows].forEach(row => {
    row.children[0].remove();
  });

  if (table.rows[0].children.length === 2) {
    removeColumn.disabled = true;
  }
});
