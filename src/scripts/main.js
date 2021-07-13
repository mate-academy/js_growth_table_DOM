'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field');

const maxSize = 10;
const minSize = 2;

addRow.addEventListener('click', () => {
  removeRow.disabled = false;

  const row = table.querySelector('tr');
  const newRow = document.createElement('tr');

  for (let i = 0; i < row.children.length; i++) {
    newRow.append(document.createElement('td'));
  }

  table.append(newRow);

  const rowCounter = table.querySelectorAll('tr').length;

  if (rowCounter === maxSize) {
    addRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  addRow.disabled = false;

  table.querySelector('tr').remove();

  const rowCounter = table.querySelectorAll('tr').length;

  if (rowCounter === minSize) {
    removeRow.disabled = true;
  }
});

addColumn.addEventListener('click', () => {
  removeColumn.disabled = false;

  const rows = table.querySelectorAll('tr');

  for (const row of rows) {
    row.append(document.createElement('td'));
  }

  const columnCounter = rows[0].querySelectorAll('td').length;

  if (columnCounter === maxSize) {
    addColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  addColumn.disabled = false;

  const rows = table.querySelectorAll('tr');

  for (const row of rows) {
    row.querySelector('td').remove();
  }

  const columnCounter = rows[0].querySelectorAll('td').length;

  if (columnCounter === minSize) {
    removeColumn.disabled = true;
  }
});
