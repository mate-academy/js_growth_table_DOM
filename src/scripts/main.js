'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field').tBodies[0];
const min = 2;
const max = 10;

appendRow.addEventListener('click', () => {
  const tr = document.createElement('tr');

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    tr.append(document.createElement('td'));
  }
  table.append(tr);

  removeRow.disabled = false;

  if (table.rows.length >= max) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  table.removeChild(table.lastChild);

  appendRow.disabled = false;

  if (table.rows.length <= min) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  for (const row of table.rows) {
    row.append(document.createElement('td'));
  }

  removeColumn.disabled = false;

  if (table.rows[0].cells.length >= max) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  for (const row of table.rows) {
    row.removeChild(row.lastChild);
  }

  appendColumn.disabled = false;

  if (table.rows[0].cells.length <= min) {
    removeColumn.disabled = true;
  }
});
