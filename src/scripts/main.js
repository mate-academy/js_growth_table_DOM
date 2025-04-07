'use strict';

const appendRow = document.querySelector('.append-row');
const table = document.querySelector('table');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const max = 10;
const min = 2;

appendRow.addEventListener('click', () => {
  if (table.rows.length < max) {
    const row = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      row.insertCell(i);
    }

    if (table.rows.length === max) {
      appendRow.disabled = true;
    }

    if (table.rows.length > min) {
      removeRow.disabled = false;
    }
  }
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > min) {
    table.deleteRow(table.rows.length - 1);

    if (table.rows.length === min) {
      removeRow.disabled = true;
    }

    if (table.rows.length < max) {
      appendRow.disabled = false;
    }
  }
});

appendColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length < max) {
    for (const row of table.rows) {
      row.insertCell(-1);
    }

    if (table.rows[0].cells.length === max) {
      appendColumn.disabled = true;
    }

    if (table.rows[0].cells.length > min) {
      removeColumn.disabled = false;
    }
  }
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length > min) {
    for (const row of table.rows) {
      row.deleteCell(0);
    }

    if (table.rows[0].cells.length === min) {
      removeColumn.disabled = true;
    }

    if (table.rows[0].cells.length < max) {
      appendColumn.disabled = false;
    }
  }
});
