'use strict';

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  if (table.rows.length >= 10) {
    return;
  }

  table.append(table.rows[0].cloneNode(true));

  appendRowButton.disabled = table.rows.length >= 10;
  removeRowButton.disabled = table.rows.length <= 2;
});

removeRowButton.addEventListener('click', () => {
  if (table.rows.length > 2) {
    table.rows[0].remove();
  }

  removeRowButton.disabled = table.rows.length === 2;
  appendRowButton.disabled = table.rows.length === 10;
});

appendColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length < 10) {
    for (const row of table.rows) {
      const newCell = document.createElement('td');

      row.append(newCell);
    }
  }

  appendColumnButton.disabled = table.rows[0].cells.length === 10;
  removeColumnButton.disabled = table.rows[0].cells.length === 2;
});

removeColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length > 2) {
    for (const row of table.rows) {
      row.deleteCell(row.cells.length - 1);
    }
  }

  removeColumnButton.disabled = table.rows[0].cells.length === 2;
  appendColumnButton.disabled = table.rows[0].cells.length > 10;
});
