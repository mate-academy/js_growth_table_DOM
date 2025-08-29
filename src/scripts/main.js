'use strict';

const table = document.querySelector('table');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const max = 10;
const min = 2;

appendRow.addEventListener('click', () => {
  if (table.rows.length < max) {
    const newRow = table.insertRow();

    const cols = table.rows[0].cells.length;

    for (let i = 0; i < cols; i++) {
      newRow.insertCell();
    }

    if (table.rows.length === max) {
      appendRow.disabled = true;
    }

    if (table.rows.length > min) {
      removeRow.disabled = false;
    }
  }
  appendRow.disabled = table.rows.length >= max;
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > min) {
    table.deleteRow(table.rows.length - 1);

    if (table.rows.length >= max) {
      appendRow.disabled = false;
    }

    if (table.rows.length <= min) {
      removeRow.disabled = false;
    }
  }
  removeRow.disabled = table.rows.length <= min;
});

appendColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length < max) {
    for (const row of table.rows) {
      row.insertCell();
    }
  }
  appendColumn.disabled = table.rows[0].cells.length >= max;
});

removeColumn.addEventListener('click', () => {
  for (const row2 of table.rows) {
    row2.deleteCell(row2.cells.length - 1);
  }

  if (table.rows[0].cells.length < max) {
    appendColumn.disabled = false;
  }

  if (table.rows[0].cells.length === min) {
    removeColumn.disabled = true;
  }
  removeColumn.disabled = table.rows[0].cells.length <= min;
});
