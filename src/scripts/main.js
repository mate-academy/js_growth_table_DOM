'use strict';

// write code here
const table = document.querySelector('table');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const row = table.insertRow(-1);
  const cells = table.rows[0].cells.length;

  for (let i = 0; i < cells; i++) {
    row.insertCell(-1);
  }

  if (table.rows.length === 10) {
    appendRow.disabled = true;
  }

  removeRow.disabled = false;
});

removeRow.addEventListener('click', () => {
  const row = table.rows[table.rows.length - 1];

  table.deleteRow(row);

  if (table.rows.length === 2) {
    removeRow.disabled = true;
  }

  appendRow.disabled = false;
});

appendColumn.addEventListener('click', () => {
  const rows = table.rows.length;

  for (let i = 0; i < rows; i++) {
    table.rows[i].insertCell(-1);
  }

  if (table.rows[0].cells.length === 10) {
    appendColumn.disabled = true;
  }

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', () => {
  const rows = table.rows.length;

  for (let i = 0; i < rows; i++) {
    table.rows[i].deleteCell(-1);
  }

  if (table.rows[0].cells.length === 2) {
    removeColumn.disabled = true;
  }

  appendColumn.disabled = false;
});
