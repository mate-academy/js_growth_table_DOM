'use strict';

const appendRow = document.querySelector('.append-row');
const remuveRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const remuveColumn = document.querySelector('.remove-column');
const field = document.querySelector('tbody');
const rows = field.rows;
let rowsIndex = 3;
let columnsIndex = 3;

appendRow.addEventListener('click', () => {
  remuveRow.disabled = false;

  const row = document.createElement('tr');

  for (let i = 0; i <= columnsIndex; i++) {
    const td = document.createElement('td');

    row.append(td);
  }
  field.append(row);
  rowsIndex++;

  if (rowsIndex === 9) {
    appendRow.disabled = true;
  }
});

remuveRow.addEventListener('click', () => {
  appendRow.disabled = false;
  field.removeChild(field.rows[rowsIndex]);
  rowsIndex--;

  if (rowsIndex === 1) {
    remuveRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  remuveColumn.disabled = false;

  for (const row of rows) {
    const td = document.createElement('td');

    row.append(td);
  }
  columnsIndex++;

  if (columnsIndex === 9) {
    appendColumn.disabled = true;
  }
});

remuveColumn.addEventListener('click', () => {
  appendColumn.disabled = false;

  for (const row of rows) {
    row.removeChild(row.children[columnsIndex]);
  }

  columnsIndex--;

  if (columnsIndex === 1) {
    remuveColumn.disabled = true;
  }
});
