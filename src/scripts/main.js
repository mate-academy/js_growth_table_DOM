'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const maxRows = 10;
const maxColumns = 10;
const minRows = 2;
const minColumns = 2;

appendRow.addEventListener('click', () => {
  if (table.rows.length >= maxRows) {
    return;
  }

  const newRow = table.rows[0].cloneNode(true);

  table.tBodies[0].append(newRow);

  if (table.rows.length >= maxRows) {
    document.querySelector('.append-row').disabled = true;
  }

  document.querySelector('.remove-row').disabled = false;
});

removeRow.addEventListener('click', () => {
  table.rows[table.rows.length - 1].remove();

  if (table.rows.length <= minRows) {
    document.querySelector('.remove-row').disabled = true;
  }

  document.querySelector('.append-row').disabled = false;
});

appendColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= maxColumns) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  if (table.rows[0].cells.length >= maxColumns) {
    document.querySelector('.append-column').disabled = true;
  }

  document.querySelector('.remove-column').disabled = false;
});

removeColumn.addEventListener('click', () => {
  for (const row of table.rows) {
    row.cells[row.cells.length - 1].remove();
  }

  if (table.rows[0].cells.length <= minColumns) {
    document.querySelector('.remove-column').disabled = true;
  }

  document.querySelector('.append-column').disabled = false;
});
