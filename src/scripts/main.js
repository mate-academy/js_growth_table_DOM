'use strict';

const table = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', e => {
  if (e.target.closest('append-row')) {
    return;
  }

  const newRow = table.insertRow(table.rows.length);

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.insertCell(i);
  }

  appendRow.disabled = table.rows.length === 10;
  removeRow.disabled = false;
});

removeRow.addEventListener('click', e => {
  if (e.target.closest('remove-row')) {
    return;
  }

  table.deleteRow(table.rows.length - 1);

  removeRow.disabled = table.rows.length === 2;
  appendRow.disabled = false;
});

appendColumn.addEventListener('click', e => {
  if (e.target.closest('append-column')) {
    return;
  }

  Array.from(table.rows).forEach(row => row.insertCell(row.cells.length));

  appendColumn.disabled = table.rows[0].cells.length === 10;
  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', e => {
  if (e.target.closest('remove-column')) {
    return;
  }

  Array.from(table.rows).forEach(row => row.lastElementChild.remove());

  removeColumn.disabled = table.rows[0].cells.length === 2;
  appendColumn.disabled = false;
});
