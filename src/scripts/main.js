'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  appendRow.disabled = table.rows.length >= 10;

  const newRow = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.insertCell();
  }
  removeRow.disabled = false;
});

removeRow.addEventListener('click', () => {
  removeRow.disabled = table.rows.length <= 3;
  table.deleteRow(1);
  appendRow.disabled = false;
});

appendColumn.addEventListener('click', () => {
  appendColumn.disabled = table.rows[0].children.length >= 9;

  for (const row of table.rows) {
    row.insertCell();
  }
  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', () => {
  removeColumn.disabled = table.rows[0].children.length <= 3;

  for (const row of table.rows) {
    row.deleteCell(1);
  }
  appendColumn.disabled = false;
});
