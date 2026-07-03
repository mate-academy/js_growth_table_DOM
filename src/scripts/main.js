'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('table');

appendRow.addEventListener('click', () => {
  if (table.rows.length >= 10) {
    return;
  }

  const rowNew = table.insertRow();
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    rowNew.insertCell();
  }

  if (table.rows.length >= 10) {
    appendRow.disabled = true;
  }

  if (table.rows.length > 2) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  table.deleteRow(table.rows.length - 1);

  if (table.rows.length < 10) {
    appendRow.disabled = false;
  }

  if (table.rows.length <= 2) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  if (table.rows[0].cells.length >= 10) {
    appendColumn.disabled = true;
  }

  if (table.rows[0].cells.length > 2) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  for (const row of table.rows) {
    row.deleteCell(row.cells.length - 1);
  }

  if (table.rows[0].cells.length < 10) {
    appendColumn.disabled = false;
  }

  if (table.rows[0].cells.length <= 2) {
    removeColumn.disabled = true;
  }
});
