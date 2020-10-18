'use strict';

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  removeRowButton.disabled = false;

  table.append(table.rows[0].cloneNode(true));

  if (table.rows.length === 10) {
    appendRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', () => {
  appendRowButton.disabled = false;

  table.deleteRow(table.rows.length - 1);

  if (table.rows.length === 2) {
    removeRowButton.disabled = true;
  }
});

appendColumnButton.addEventListener('click', () => {
  removeColumnButton.disabled = false;

  for (const row of table.rows) {
    const newCell = document.createElement('td');

    row.append(newCell);
  }

  if (table.rows[0].cells.length === 10) {
    appendColumnButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', () => {
  appendColumnButton.disabled = false;

  for (const row of table.rows) {
    row.deleteCell(row.cells.length - 1);
  }

  if (table.rows[0].cells.length === 2) {
    removeColumnButton.disabled = true;
  }
});
