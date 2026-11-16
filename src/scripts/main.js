'use strict';

const MIN_ROWS = 2;
const MAX_ROWS = 10;
const MAX_COLUMNS = 10;
const MIN_COLUMNS = 2;
const table = document.querySelector('.field');
const rows = table.rows;
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  if (rows.length < MAX_ROWS) {
    removeRowButton.disabled = false;

    const newRow = document.createElement('tr');

    for (let i = 0; i < rows[0].cells.length; i++) {
      const td = document.createElement('td');

      newRow.append(td);
    }

    table.tBodies[0].append(newRow);
  }

  if (rows.length === MAX_ROWS) {
    appendRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', () => {
  if (rows.length > MIN_ROWS) {
    appendRowButton.disabled = false;

    const lastRow = rows[rows.length - 1];

    lastRow.remove();
  }

  if (rows.length === MIN_ROWS) {
    removeRowButton.disabled = true;
  }
});

appendColumnButton.addEventListener('click', () => {
  if (rows[0].cells.length < MAX_COLUMNS) {
    removeColumnButton.disabled = false;

    const arrayRows = Array.from(table.rows);

    arrayRows.forEach((row) => {
      const newTd = document.createElement('td');

      row.append(newTd);
    });
  }

  if (rows[0].cells.length === MAX_COLUMNS) {
    appendColumnButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', () => {
  if (rows[0].cells.length > MIN_COLUMNS) {
    appendColumnButton.disabled = false;

    const arrayRows = Array.from(table.rows);

    arrayRows.forEach((row) => {
      const lastTd = row.cells[row.cells.length - 1];

      lastTd.remove();
    });
  }

  if (rows[0].cells.length === MIN_COLUMNS) {
    removeColumnButton.disabled = true;
  }
});
