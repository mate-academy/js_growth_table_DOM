'use strict';

// write code here

const table = document.querySelector('table');
const appendColumn = document.querySelector('.append-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

appendColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  for (const row of table.rows) {
    const copyCell = row.cells[0].cloneNode(true);

    row.append(copyCell);
  }

  if (table.rows[0].cells.length > 2) {
    removeColumn.disabled = false;
  }

  if (table.rows[0].cells.length >= 10) {
    appendColumn.disabled = true;
  }
});

appendRow.addEventListener('click', () => {
  if (table.rows.length >= 10) {
    return;
  }

  const lastRow = table.rows[table.rows.length - 1];

  const copyRow = lastRow.cloneNode(true);

  lastRow.after(copyRow);

  if (table.rows.length > 2) {
    removeRow.disabled = false;
  }

  if (table.rows.length >= 10) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  if (table.rows.length <= 2) {
    return;
  }

  table.deleteRow(-1);

  if (table.rows.length > 2) {
    appendRow.disabled = false;
  }

  if (table.rows.length <= 2) {
    removeRow.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length <= 2) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  if (table.rows[0].cells.length > 2) {
    appendColumn.disabled = false;
  }

  if (table.rows[0].cells.length <= 2) {
    removeColumn.disabled = true;
  }
});
