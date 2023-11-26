'use strict';

const table = document.querySelector('table tbody');

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.addEventListener('click', (e) => {
  const newColum = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newColum.insertCell(i);
  }

  if (table.rows.length >= 10) {
    addRow.disabled = true;
  }

  if (table.rows.length > 2) {
    removeRow.disabled = false;
  }
});

addColumn.addEventListener('click', (e) => {
  for (const row of table.rows) {
    row.insertCell(row.cells.length);
  }

  if (table.rows[0].cells.length >= 10) {
    addColumn.disabled = true;
  }

  if (table.rows[0].cells.length > 2) {
    removeColumn.disabled = false;
  }
});

removeRow.addEventListener('click', (e) => {
  table.deleteRow(table.rows.length - 1);

  if (table.rows.length < 10) {
    addRow.disabled = false;
  }

  if (table.rows.length <= 2) {
    removeRow.disabled = true;
  }
});

removeColumn.addEventListener('click', (e) => {
  for (const row of table.rows) {
    row.deleteCell(row.cells.length - 1);
  }

  if (table.rows[0].cells.length < 10) {
    addColumn.disabled = false;
  }

  if (table.rows[0].cells.length <= 2) {
    removeColumn.disabled = true;
  }
});
