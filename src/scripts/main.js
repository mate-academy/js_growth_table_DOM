'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const minRowAndColumn = 2;
const maxRowAndColumn = 10;

appendRow.addEventListener('click', () => {
  table.tBodies[0].append(table.rows[0].cloneNode(true));

  if (table.rows.length >= maxRowAndColumn) {
    appendRow.disabled = true;
  }

  removeRow.disabled = false;
});

removeRow.addEventListener('click', () => {
  table.rows[table.rows.length - 1].remove();

  if (table.rows.length <= minRowAndColumn) {
    removeRow.disabled = true;
  }

  appendRow.disabled = false;
});

appendColumn.addEventListener('click', () => {
  const rows = Array.from(table.rows);

  rows.forEach(row => {
    row.append(row.children[0].cloneNode(true));

    if (row.children.length >= maxRowAndColumn) {
      appendColumn.disabled = true;
    }
  });

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', () => {
  const rows = Array.from(table.rows);

  rows.forEach(row => {
    row.children[row.children.length - 1].remove();

    if (row.children.length <= minRowAndColumn) {
      removeColumn.disabled = true;
    }
  });

  appendColumn.disabled = false;
});
