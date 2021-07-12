'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field');
let tableRow = document.querySelector('tr');
const maxRows = 9;
const maxColumns = 9;
const minRows = 3;
const minColumns = 3;

appendRow.addEventListener('click', () => {
  if (field.rows.length >= maxRows) {
    appendRow.disabled = true;
  }

  const row = document.createElement('tr');

  for (let i = 0; i < tableRow.children.length; i++) {
    const column = document.createElement('td');

    row.append(column);
  }

  field.append(row);
  removeRow.disabled = false;
});

removeRow.addEventListener('click', () => {
  if (field.rows.length <= minRows) {
    removeRow.disabled = true;
  }

  tableRow.remove();
  tableRow = document.querySelector('tr');

  appendRow.disabled = false;
});

appendColumn.addEventListener('click', () => {
  const tableRows = document.querySelectorAll('tr');

  if (field.rows[0].cells.length >= maxColumns) {
    appendColumn.disabled = true;
  }

  tableRows.forEach(row => {
    row.append(document.createElement('td'));
  });

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', e => {
  if (field.rows[0].cells.length <= minColumns) {
    removeColumn.disabled = true;
  }

  const tableRows = document.querySelectorAll('tr');

  tableRows.forEach(row => {
    row.children[0].remove();
  });

  appendColumn.disabled = false;
});
