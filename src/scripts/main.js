'use strict';

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

const field = document.querySelector('.field tbody');

appendRow.addEventListener('click', () => {
  if (field.rows.length >= 10) {
    return;
  }

  const columnCount = field.rows[0].cells.length;
  const newTr = document.createElement('tr');

  for (let i = 0; i < columnCount; i++) {
    const newTd = document.createElement('td');

    newTr.appendChild(newTd);
  }

  field.appendChild(newTr);

  appendRow.disabled = field.rows.length === 10;
  removeRow.disabled = field.rows.length === 2;
});

appendColumn.addEventListener('click', () => {
  if (field.rows[0].cells.length >= 10) {
    return;
  }

  for (const row of field.rows) {
    const newTd = document.createElement('td');

    row.appendChild(newTd);
  }

  const columnCount = field.rows[0].cells.length;

  appendColumn.disabled = columnCount === 10;
  removeColumn.disabled = columnCount === 2;
});

removeRow.addEventListener('click', () => {
  if (field.rows.length > 2) {
    field.deleteRow(-1);
  }

  removeRow.disabled = field.rows.length === 2;
  appendRow.disabled = field.rows.length === 10;
});

removeColumn.addEventListener('click', () => {
  if (field.rows[0].cells.length > 2) {
    for (const row of field.rows) {
      row.deleteCell(-1);
    }
  }

  removeColumn.disabled = field.rows[0].cells.length === 2;
  appendColumn.disabled = field.rows[0].cells.length === 10;
});
