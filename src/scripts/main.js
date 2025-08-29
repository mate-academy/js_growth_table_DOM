'use strict';

const table = document.querySelector('table');
const tbody = table.tBodies[0];
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const max = 10;
const min = 2;

appendRow.addEventListener('click', () => {
  if (tbody.rows.length < max) {
    const newRow = tbody.insertRow();

    const cols = tbody.rows[0].cells.length;

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
  appendRow.disabled = tbody.rows.length >= max;
});

removeRow.addEventListener('click', () => {
  if (tbody.rows.length > min) {
    tbody.deleteRow(tbody.rows.length - 1);

    if (tbody.rows.length >= max) {
      appendRow.disabled = false;
    }

    if (tbody.rows.length <= min) {
      removeRow.disabled = true;
    }
  }
  removeRow.disabled = tbody.rows.length <= min;
});

appendColumn.addEventListener('click', () => {
  if (tbody.rows[0].cells.length < max) {
    for (const row of tbody.rows) {
      row.insertCell();
    }
  }
  appendColumn.disabled = tbody.rows[0].cells.length >= max;
});

removeColumn.addEventListener('click', () => {
  if (tbody.rows[0].cells.length > min) {
    for (const row of tbody.rows) {
      row.deleteCell(row.cells.length - 1);
    }
  }
  removeColumn.disabled = tbody.rows[0].cells.length <= min;
});
